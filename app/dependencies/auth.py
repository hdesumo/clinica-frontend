from fastapi import Header, HTTPException
from sqlalchemy.orm import Session
from app.models.api_key import APIKey
from app.models.institution import Institution
from app.database import SessionLocal

def verify_api_key(x_api_key: str = Header(...)):
    db: Session = SessionLocal()

    key = db.query(APIKey).filter(
        APIKey.key == x_api_key,
        APIKey.active == True
    ).first()

    if not key:
        raise HTTPException(status_code=403, detail="Invalid API Key")

    institution = db.query(Institution).filter(
        Institution.id == key.institution_id,
        Institution.status == "active"
    ).first()

    if not institution:
        raise HTTPException(status_code=403, detail="Institution inactive")

    return {
        "api_key": key,
        "institution": institution
    }
