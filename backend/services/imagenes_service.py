# backend/services/imagenes_service.py
import aiohttp
import os
from models.imagenes_models import ImagenResponse

class ImagenesService:
    def __init__(self):
        # Puedes obtener una API key gratis en https://thecatapi.com/
        self.api_key = "live_tu_api_key_aqui"  # Reemplaza con tu API key
        self.base_url = "https://api.thecatapi.com/v1"
    
    async def obtener_imagenes_aleatorias(self):
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(
                    f"{self.base_url}/images/search?limit=10",
                    headers={"x-api-key": self.api_key}
                ) as response:
                    if response.status == 200:
                        imagenes = await response.json()
                        return imagenes
                    else:
                        return {"error": f"Error en API: {response.status}"}
        except Exception as e:
            return {"error": f"Error de conexión: {str(e)}"}
    
    async def marcar_como_favorito(self, image_id: str):
        # Por ahora simulamos la respuesta
        # Más adelante implementaremos la llamada real a la API
        return {"message": f"Imagen {image_id} marcada como favorita", "id": image_id}
    
    async def obtener_favoritos(self):
        # Por ahora retornamos lista vacía
        # Más adelante implementaremos la llamada real a la API
        return []