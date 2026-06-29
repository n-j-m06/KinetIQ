from datetime import datetime
from pydantic import BaseModel


class MetricCreate(BaseModel):
    blink_rate: float
    attention_score: float
    fatigue_score: float
    risk_score: float
    phone_detected: bool = False


class MetricResponse(BaseModel):
    id: int
    session_id: int
    blink_rate: float
    attention_score: float
    fatigue_score: float
    risk_score: float
    phone_detected: bool
    created_at: datetime

    class Config:
        from_attributes = True