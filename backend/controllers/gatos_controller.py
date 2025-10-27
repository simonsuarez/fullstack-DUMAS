# backend/controllers/gatos_controller.py
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from services.gatos_service import GatosService
from models.gatos_models import GatoCreate, GatoResponse
from database import get_db
from typing import List

router = APIRouter()
service = GatosService()

@router.get("/", response_model=List[GatoResponse])
def get_gatos(db: Session = Depends(get_db)):
    try:
        return service.obtener_todos_gatos(db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{gato_id}", response_model=GatoResponse)
def get_gato(gato_id: int, db: Session = Depends(get_db)):
    gato = service.obtener_gato_por_id(db, gato_id)
    if gato is None:
        raise HTTPException(status_code=404, detail="Gato no encontrado")
    return gato

@router.post("/", response_model=GatoResponse)
def crear_gato(gato: GatoCreate, db: Session = Depends(get_db)):
    try:
        return service.crear_gato(db, gato)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/{gato_id}", response_model=GatoResponse)
def actualizar_gato(gato_id: int, gato: GatoCreate, db: Session = Depends(get_db)):
    gato_actualizado = service.actualizar_gato(db, gato_id, gato)
    if gato_actualizado is None:
        raise HTTPException(status_code=404, detail="Gato no encontrado")
    return gato_actualizado

@router.delete("/{gato_id}")
def eliminar_gato(gato_id: int, db: Session = Depends(get_db)):
    eliminado = service.eliminar_gato(db, gato_id)
    if not eliminado:
        raise HTTPException(status_code=404, detail="Gato no encontrado")
    return {"message": "Gato eliminado correctamente"}