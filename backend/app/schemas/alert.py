from datetime import datetime
from pydantic import BaseModel


class AlertResponse(BaseModel):
    id: int
    session_id: int
    alert_type: str
    message: str
    created_at: datetime

    class Config:
        from_attributes = True