from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.api.deps import get_current_user
from app.models.user import User
from app.models.session import Session as DriveSession
from app.models.alert import Alert
from app.schemas.alert import AlertResponse

router = APIRouter(
    prefix="/alerts",
    tags=["Alerts"]
)
@router.get(
    "",
    response_model=list[AlertResponse]
)
def get_alerts(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    sessions = db.query(
        DriveSession
    ).filter(
        DriveSession.user_id == current_user.id
    ).all()

    session_ids = [s.id for s in sessions]

    return db.query(Alert).filter(
        Alert.session_id.in_(session_ids)
    ).all()