# backend/services/gatos_service.py
from sqlalchemy.orm import Session
from models.gatos_models import GatoDB, GatoCreate, GatoResponse
from typing import List, Optional

class GatosService:
    def __init__(self):
        pass
    
    def obtener_todos_gatos(self, db: Session) -> List[GatoResponse]:
        try:
            gatos = db.query(GatoDB).all()
            return gatos
        except Exception as e:
            raise e
    
    def obtener_gato_por_id(self, db: Session, gato_id: int) -> Optional[GatoResponse]:
        try:
            gato = db.query(GatoDB).filter(GatoDB.id == gato_id).first()
            return gato
        except Exception as e:
            raise e
    
    def crear_gato(self, db: Session, gato: GatoCreate) -> GatoResponse:
        try:
            db_gato = GatoDB(
                nombre=gato.nombre,
                raza=gato.raza,
                edad=gato.edad,
                foto=gato.foto
            )
            db.add(db_gato)
            db.commit()
            db.refresh(db_gato)
            return db_gato
        except Exception as e:
            db.rollback()
            raise e
    
    def actualizar_gato(self, db: Session, gato_id: int, gato: GatoCreate) -> Optional[GatoResponse]:
        try:
            db_gato = db.query(GatoDB).filter(GatoDB.id == gato_id).first()
            if db_gato:
                db_gato.nombre = gato.nombre
                db_gato.raza = gato.raza
                db_gato.edad = gato.edad
                db_gato.foto = gato.foto
                db.commit()
                db.refresh(db_gato)
            return db_gato
        except Exception as e:
            db.rollback()
            raise e
    
    def eliminar_gato(self, db: Session, gato_id: int) -> bool:
        try:
            db_gato = db.query(GatoDB).filter(GatoDB.id == gato_id).first()
            if db_gato:
                db.delete(db_gato)
                db.commit()
                return True
            return False
        except Exception as e:
            db.rollback()
            raise e