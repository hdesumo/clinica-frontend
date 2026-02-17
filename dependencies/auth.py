from fastapi import Header, HTTPException
from sqlalchemy.orm import Session
from app.models.api_key import APIKey
from app.database import SessionLocal

def verify_api_key(x_api_key: str = Header(...)):
    db: Session = SessionLocal()
    key = db.query(APIKey).filter(
        APIKey.key == x_api_key,
        APIKey.active == True
    ).first()

    if not key:
        raise HTTPException(status_code=403, detail="Invalid API Key")

    return key
