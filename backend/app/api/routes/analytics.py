from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session as DBSession
from sqlalchemy import func

from app.database.session import get_db
from app.api.deps import get_current_user
from app.models.user import User
from app.models.session import Session
from app.models.metric import Metric
from app.models.alert import Alert
from app.schemas.analytics import AnalyticsResponse

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


@router.get(
    "",
    response_model=AnalyticsResponse
)
def get_analytics(
    db: DBSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    total_sessions = db.query(Session).filter(
        Session.user_id == current_user.id
    ).count()

    user_sessions = db.query(Session.id).filter(
        Session.user_id == current_user.id
    ).subquery()

    total_alerts = db.query(Alert).filter(
        Alert.session_id.in_(user_sessions)
    ).count()

    average_attention = db.query(
        func.avg(Metric.attention_score)
    ).join(
        Session,
        Metric.session_id == Session.id
    ).filter(
        Session.user_id == current_user.id
    ).scalar()

    average_fatigue = db.query(
        func.avg(Metric.fatigue_score)
    ).join(
        Session,
        Metric.session_id == Session.id
    ).filter(
        Session.user_id == current_user.id
    ).scalar()

    average_risk = db.query(
        func.avg(Metric.risk_score)
    ).join(
        Session,
        Metric.session_id == Session.id
    ).filter(
        Session.user_id == current_user.id
    ).scalar()

    return {
        "total_sessions": total_sessions,
        "total_alerts": total_alerts,
        "average_attention": round(average_attention or 0, 2),
        "average_fatigue": round(average_fatigue or 0, 2),
        "average_risk": round(average_risk or 0, 2)
    }