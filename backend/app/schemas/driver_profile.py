from pydantic import BaseModel


class DriverProfileCreate(BaseModel):
    full_name: str
    age: int
    license_number: str
    driving_experience: int
    vehicle_type: str


class DriverProfileResponse(BaseModel):
    id: int
    user_id: int
    full_name: str
    age: int
    license_number: str
    driving_experience: int
    vehicle_type: str

    class Config:
        from_attributes = True