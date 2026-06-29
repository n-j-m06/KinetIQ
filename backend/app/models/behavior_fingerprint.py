from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

from app.database.base import Base


class BehaviorFingerprint(Base):
    __tablename__ = "behavior_fingerprints"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True
    )

    avg_blink_rate = Column(Float)
    avg_attention_score = Column(Float)
    avg_fatigue_score = Column(Float)
    avg_risk_score = Column(Float)

    user = relationship("User")