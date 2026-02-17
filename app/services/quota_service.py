from sqlalchemy.orm import Session
from app.models.usage_metric import UsageMetric
from datetime import datetime

PLAN_LIMITS = {
    "starter": 5000,
    "national": 100000,
    "enterprise": None  # unlimited
}

def check_and_increment_quota(db: Session, institution):
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
        db.commit()

    limit = PLAN_LIMITS.get(institution.plan)

    if limit is not None and usage.requests_count >= limit:
        return False, usage.requests_count, limit

    usage.requests_count += 1
    db.commit()

    return True, usage.requests_count, limit
