from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.auth import RegisterRequest
from app.core.security import hash_password


def create_user(
    db: Session,
    user: RegisterRequest
):
    existing = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing:
        return None

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user