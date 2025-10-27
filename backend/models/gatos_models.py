# backend/models/gatos_models.py
from sqlalchemy import Column, Integer, String
from database import Base

class GatoDB(Base):
    __tablename__ = "gatos"
    
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False)
    raza = Column(String(100), nullable=False)
    edad = Column(Integer, nullable=False)
    foto = Column(String(500), nullable=False)  # URL de la imagen

# Modelos Pydantic para validación
from pydantic import BaseModel

class GatoBase(BaseModel):
    nombre: str
    raza: str
    edad: int
    foto: str

class GatoCreate(GatoBase):
    pass

class GatoResponse(GatoBase):
    id: int
    
    class Config:
        from_attributes = True