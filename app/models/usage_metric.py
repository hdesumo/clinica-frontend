from sqlalchemy import Column, String, Integer, DateTime
from sqlalchemy.sql import func
from app.database import Base
import uuid

class UsageMetric(Base):
    __tablename__ = "usage_metrics"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    institution_id = Column(String, nullable=False)
    month = Column(String, nullable=False)  # example: "2026-02"
    requests_count = Column(Integer, default=0)
    updated_at = Column(DateTime(timezone=True), server_default=func.now())
