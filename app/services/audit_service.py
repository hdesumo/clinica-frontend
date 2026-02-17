from app.models.audit_log import AuditLog
from app.database import SessionLocal

def create_audit_log(api_key_id: str, endpoint: str):
    db = SessionLocal()

    log = AuditLog(
        api_key_id=api_key_id,
        endpoint=endpoint
    )

    db.add(log)
    db.commit()
    db.close()
