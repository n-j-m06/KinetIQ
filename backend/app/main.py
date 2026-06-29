from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.base import Base
from app.database.session import engine
from app.models.user import User
from app.api.routes.auth import router as auth_router
from app.models.driver_profile import DriverProfile
from app.api.routes.profile import router as profile_router
from app.models.session import Session
from app.api.routes.session import router as session_router
from app.models.metric import Metric
from app.api.routes.metric import router as metric_router
from app.api.routes.alert import router as alert_router
from app.api.routes.websocket import router as websocket_router
from app.models.behavior_fingerprint import BehaviorFingerprint
from app.api.routes.fingerprint import (
    router as fingerprint_router
)
from app.api.routes.analytics import router as analytics_router

Base.metadata.create_all(bind=engine)
app = FastAPI(
    title="KINETIQ API",
    version="1.0.0"
)
app.include_router(auth_router)
app.include_router(profile_router)
app.include_router(session_router)
app.include_router(metric_router)
app.include_router(alert_router)
app.include_router(
    websocket_router
)
app.include_router(
    fingerprint_router
)
app.include_router(analytics_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "KINETIQ Backend Running 🚀"}


@app.get("/health")
def health():
    return {"status": "healthy"}