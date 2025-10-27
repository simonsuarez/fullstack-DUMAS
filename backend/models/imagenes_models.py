# backend/models/imagenes_models.py
from pydantic import BaseModel

class FavoritoRequest(BaseModel):
    image_id: str

class ImagenResponse(BaseModel):
    id: str
    url: str
    width: int
    height: int
    
    class Config:
        from_attributes = True