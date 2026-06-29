from pydantic import BaseModel


class AnalyticsResponse(BaseModel):
    total_sessions: int
    total_alerts: int
    average_attention: float
    average_fatigue: float
    average_risk: float