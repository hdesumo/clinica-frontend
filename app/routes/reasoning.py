from fastapi import APIRouter, Depends
from datetime import datetime
from app.dependencies.auth import verify_api_key
from app.models.usage_metric import UsageMetric
from app.database import SessionLocal
from fastapi import HTTPException
from app.services.quota_service import check_and_increment_quota

router = APIRouter()

@router.post("/reason")
def run_reason(payload: dict, context=Depends(verify_api_key)):
    db = SessionLocal()

    institution = context["institution"]

    current_month = datetime.utcnow().strftime("%Y-%m")

    usage = db.query(UsageMetric).filter(
        UsageMetric.institution_id == institution.id,
        UsageMetric.month == current_month
    ).first()

    if not usage:
        usage = UsageMetric(
            institution_id=institution.id,
            month=current_month,
            requests_count=0
        )
        db.add(usage)

    usage.requests_count += 1
    db.commit()

    # ici logique clinique

    return {"status": "ok"}
