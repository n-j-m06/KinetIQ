from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.api.deps import get_current_user
from app.models.user import User
from app.models.driver_profile import DriverProfile
from app.schemas.driver_profile import (
    DriverProfileCreate,
    DriverProfileResponse
)

router = APIRouter(
    prefix="/profile",
    tags=["Driver Profile"]
)
@router.post(
    "",
    response_model=DriverProfileResponse
)
def create_profile(
    profile: DriverProfileCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing = db.query(
        DriverProfile
    ).filter(
        DriverProfile.user_id == current_user.id
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Profile already exists"
        )

    new_profile = DriverProfile(
        user_id=current_user.id,
        full_name=profile.full_name,
        age=profile.age,
        license_number=profile.license_number,
        driving_experience=profile.driving_experience,
        vehicle_type=profile.vehicle_type
    )

    db.add(new_profile)
    db.commit()
    db.refresh(new_profile)

    return new_profile

@router.get(
    "",
    response_model=DriverProfileResponse
)
def get_profile(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    profile = db.query(
        DriverProfile
    ).filter(
        DriverProfile.user_id == current_user.id
    ).first()

    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    return profile
@router.put(
    "",
    response_model=DriverProfileResponse
)
def update_profile(
    profile_data: DriverProfileCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    profile = db.query(
        DriverProfile
    ).filter(
        DriverProfile.user_id == current_user.id
    ).first()

    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    profile.full_name = profile_data.full_name
    profile.age = profile_data.age
    profile.license_number = profile_data.license_number
    profile.driving_experience = profile_data.driving_experience
    profile.vehicle_type = profile_data.vehicle_type

    db.commit()
    db.refresh(profile)

    return profile