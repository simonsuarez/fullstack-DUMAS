# backend/controllers/imagenes_controller.py
from fastapi import APIRouter, HTTPException
from services.imagenes_service import ImagenesService
from models.imagenes_models import FavoritoRequest

router = APIRouter()
service = ImagenesService()

@router.get("/")
async def get_imagenes():
    imagenes = await service.obtener_imagenes_aleatorias()
    if "error" in imagenes:
        raise HTTPException(status_code=500, detail=imagenes["error"])
    return imagenes

@router.post("/favoritos")
async def marcar_favorito(favorito: FavoritoRequest):
    resultado = await service.marcar_como_favorito(favorito.image_id)
    return resultado

@router.get("/favoritos")
async def get_favoritos():
    favoritos = await service.obtener_favoritos()
    return favoritos