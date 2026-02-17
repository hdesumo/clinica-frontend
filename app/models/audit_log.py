from sqlalchemy import Column, String, DateTime
from sqlalchemy.sql import func
from app.database import Base
import uuid

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    api_key_id = Column(String, nullable=False)
    endpoint = Column(String, nullable=False)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
