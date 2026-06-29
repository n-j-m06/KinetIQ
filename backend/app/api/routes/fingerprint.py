from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.api.deps import get_current_user

from app.models.user import User
from app.models.session import Session as DriveSession
from app.models.behavior_fingerprint import (
    BehaviorFingerprint
)

from app.schemas.behavior_fingerprint import (
    FingerprintResponse
)

from app.services.fingerprint_service import (
    build_fingerprint
)

router = APIRouter(
    prefix="/fingerprint",
    tags=["Behavior Fingerprint"]
)
@router.post(
    "/build",
    response_model=FingerprintResponse
)
def create_fingerprint(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    sessions = db.query(
        DriveSession
    ).filter(
        DriveSession.user_id == current_user.id
    ).all()

    if not sessions:
        raise HTTPException(
            status_code=400,
            detail="No driving sessions found"
        )

    session_ids = [
        s.id for s in sessions
    ]

    fingerprint = build_fingerprint(
        db,
        current_user.id,
        session_ids
    )

    return fingerprint
@router.get(
    "",
    response_model=FingerprintResponse
)
def get_fingerprint(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    fingerprint = db.query(
        BehaviorFingerprint
    ).filter(
        BehaviorFingerprint.user_id == current_user.id
    ).first()

    if fingerprint is None:
        raise HTTPException(
            status_code=404,
            detail="Fingerprint not created"
        )

    return fingerprint