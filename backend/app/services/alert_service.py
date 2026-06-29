from app.models.alert import Alert


def create_alert(
    db,
    session_id,
    alert_type,
    message
):
    alert = Alert(
        session_id=session_id,
        alert_type=alert_type,
        message=message
    )

    db.add(alert)
    db.commit()