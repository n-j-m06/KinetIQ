from sqlalchemy.orm import Session

from app.models.driver_profile import DriverProfile


def get_profile(db: Session, user_id: int):
    return db.query(
        DriverProfile
    ).filter(
        DriverProfile.user_id == user_id
    ).first()