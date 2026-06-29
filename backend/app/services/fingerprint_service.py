from sqlalchemy import func

from app.models.metric import Metric
from app.models.behavior_fingerprint import (
    BehaviorFingerprint
)


def build_fingerprint(
    db,
    user_id,
    session_ids
):
    metrics = db.query(
        func.avg(Metric.blink_rate),
        func.avg(Metric.attention_score),
        func.avg(Metric.fatigue_score),
        func.avg(Metric.risk_score)
    ).filter(
        Metric.session_id.in_(session_ids)
    ).first()

    fingerprint = db.query(
        BehaviorFingerprint
    ).filter(
        BehaviorFingerprint.user_id == user_id
    ).first()

    if fingerprint is None:
        fingerprint = BehaviorFingerprint(
            user_id=user_id
        )
        db.add(fingerprint)

    fingerprint.avg_blink_rate = metrics[0]
    fingerprint.avg_attention_score = metrics[1]
    fingerprint.avg_fatigue_score = metrics[2]
    fingerprint.avg_risk_score = metrics[3]

    db.commit()
    db.refresh(fingerprint)

    return fingerprint