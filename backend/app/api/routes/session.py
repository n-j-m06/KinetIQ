from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session as DBSession

from app.database.session import get_db
from app.api.deps import get_current_user
from app.models.user import User
from app.models.session import Session
from app.schemas.session import SessionResponse
from datetime import datetime

router = APIRouter(
    prefix="/session",
    tags=["Sessions"]
)
@router.post(
    "/start",
    response_model=SessionResponse
)
def start_session(
    db: DBSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing = db.query(Session).filter(
        Session.user_id == current_user.id,
        Session.status == "ACTIVE"
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Session already active"
        )

    session = Session(
        user_id=current_user.id
    )

    db.add(session)
    db.commit()
    db.refresh(session)

    return session
@router.post(
    "/end",
    response_model=SessionResponse
)
def end_session(
    db: DBSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    session = db.query(Session).filter(
        Session.user_id == current_user.id,
        Session.status == "ACTIVE"
    ).first()

    if not session:
        raise HTTPException(
            status_code=404,
            detail="No active session"
        )

    session.status = "ENDED"
    session.ended_at = datetime.utcnow()

    db.commit()
    db.refresh(session)

    return session
@router.get(
    "/history",
    response_model=list[SessionResponse]
)
def history(
    db: DBSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return db.query(Session).filter(
        Session.user_id == current_user.id
    ).all()