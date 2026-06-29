from datetime import datetime
from pydantic import BaseModel


class SessionResponse(BaseModel):
    id: int
    user_id: int
    started_at: datetime
    ended_at: datetime | None
    status: str

    class Config:
        from_attributes = True