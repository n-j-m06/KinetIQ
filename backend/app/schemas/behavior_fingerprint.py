from pydantic import BaseModel


class FingerprintResponse(BaseModel):
    id: int
    user_id: int
    avg_blink_rate: float
    avg_attention_score: float
    avg_fatigue_score: float
    avg_risk_score: float

    class Config:
        from_attributes = True