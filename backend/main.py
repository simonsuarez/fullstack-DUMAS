# backend/main.py
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from controllers import gatos_controller, imagenes_controller
from database import engine, Base, get_db
from sqlalchemy.orm import Session

# Crear tablas
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Cat API", version="1.0.0")

# CORS para el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir routers
app.include_router(gatos_controller.router, prefix="/gatos", tags=["gatos"])
app.include_router(imagenes_controller.router, prefix="/imagenes", tags=["imagenes"])

@app.get("/")
def read_root():
    return {"message": "Cat API Running", "status": "OK"}

@app.get("/health")
def health_check(db: Session = Depends(get_db)):
    try:
        # Probar conexión a la BD
        db.execute(text("SELECT 1"))
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        return {"status": "unhealthy", "database": "disconnected", "error": str(e)}