import asyncio
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session as DBSession
from app.services.alert_service import create_alert
from app.database.session import get_db
from app.api.deps import get_current_user
from app.models.user import User
from app.models.session import Session
from app.models.metric import Metric
from app.schemas.metric import (
    MetricCreate,
    MetricResponse
)
from app.websocket.manager import manager

router = APIRouter(
    prefix="/metrics",
    tags=["Metrics"]
)
@router.post(
    "",
    response_model=MetricResponse
)
async def create_metric(
    metric: MetricCreate,
    db: DBSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    active_session = db.query(Session).filter(
        Session.user_id == current_user.id,
        Session.status == "ACTIVE"
    ).first()

    if not active_session:
        raise HTTPException(
            status_code=400,
            detail="No active session"
        )

    new_metric = Metric(
        session_id=active_session.id,
        blink_rate=metric.blink_rate,
        attention_score=metric.attention_score,
        fatigue_score=metric.fatigue_score,
        risk_score=metric.risk_score,
        phone_detected=metric.phone_detected
    )

    db.add(new_metric)
    db.commit()
    db.refresh(new_metric)

    asyncio.create_task(
        manager.broadcast(
            {
                "type": "metric",
                "blink_rate": metric.blink_rate,
                "attention_score": metric.attention_score,
                "fatigue_score": metric.fatigue_score,
                "risk_score": metric.risk_score,
                "phone_detected": metric.phone_detected
            }
        )
    )

    if metric.fatigue_score > 70:
        create_alert(
            db,
            active_session.id,
            "FATIGUE",
            "Driver fatigue detected"
        )

    if metric.attention_score < 40:
        create_alert(
            db,
            active_session.id,
            "DISTRACTION",
            "Driver attention is low"
        )

    if metric.phone_detected:
        create_alert(
            db,
            active_session.id,
            "PHONE",
            "Mobile phone usage detected"
        )

    if metric.risk_score > 80:
        create_alert(
            db,
            active_session.id,
            "HIGH_RISK",
            "High risk driving behaviour detected"
        )
    return new_metric
@router.get(
    "",
    response_model=list[MetricResponse]
)
def get_metrics(
    db: DBSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    active_session = db.query(Session).filter(
        Session.user_id == current_user.id,
        Session.status == "ACTIVE"
    ).first()

    if not active_session:
        raise HTTPException(
            status_code=400,
            detail="No active session"
        )

    return db.query(Metric).filter(
        Metric.session_id == active_session.id
    ).all()