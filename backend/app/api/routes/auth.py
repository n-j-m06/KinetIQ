from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.api.deps import get_current_user
from app.models.user import User
from app.database.session import get_db
from fastapi.security import OAuth2PasswordRequestForm
from app.schemas.auth import (
    RegisterRequest,
    LoginRequest,
    Token,
    UserResponse,
)
from app.models.user import User
from app.services.auth_service import create_user
from app.core.security import (
    verify_password,
    create_access_token,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post(
    "/register",
    response_model=UserResponse
)
def register(
    user: RegisterRequest,
    db: Session = Depends(get_db)
):
    created = create_user(db, user)

    if not created:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    return created


@router.post(
    "/login",
    response_model=Token
)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    existing = db.query(User).filter(
        User.email == form_data.username
    ).first()

    if not existing:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if not verify_password(
        form_data.password,
        existing.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    token = create_access_token(
        {"sub": str(existing.id)}
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }
@router.get(
    "/me",
    response_model=UserResponse
)
def me(
    current_user: User = Depends(get_current_user)
):
    return current_user