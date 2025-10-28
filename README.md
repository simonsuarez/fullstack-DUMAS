# fullstack-DUMAS
Desarrollar prueba de competencia tecnica - API de imagenes de gato con FastApi y Angular

# 🐱 CatGallery - FullStack App

Una aplicación fullstack para gestionar imágenes de gatos y registros felinos, desarrollada con **Angular 18** y **FastAPI**.

## 🚀 Características

### Backend (FastAPI + PostgreSQL)
- ✅ **Controlador Imágenes**: Integración con TheCatAPI
- ✅ **Controlador Gatos**: CRUD completo con base de datos
- ✅ **REST API** documentada automáticamente
- ✅ **CORS** configurado para frontend

### Frontend (Angular 18 + TypeScript)
- ✅ **Módulo Imágenes**: 10 imágenes aleatorias + favoritos
- ✅ **Módulo Gatos**: Gestión completa de registros
- ✅ **Selección de fotos**: Modal para elegir de favoritos
- ✅ **Interfaz responsive** con Bootstrap
- ✅ **Estados de carga** y feedback visual

## 🛠️ Tecnologías

### Backend
- **Python 3.9+**
- **FastAPI** - Framework web moderno
- **SQLAlchemy** - ORM para PostgreSQL
- **PostgreSQL 17.6** - Base de datos
- **TheCatAPI** - API externa de imágenes

### Frontend
- **Angular 18** - Framework frontend
- **TypeScript** - Lenguaje tipado
- **Bootstrap 5** - Estilos y componentes
- **RxJS** - Programación reactiva

## 📦 Instalación y Ejecución

## 🔐 Configuración de API Key

1. Regístrate en [TheCatAPI](https://thecatapi.com/) para obtener una API key gratis
2. Crea `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  catApiKey: 'tu_api_key_theCatAPI'
};
```
## 🗄️ Configuración de Base de Datos

## PostgreSQL con Docker
```bash
# Ejecutar PostgreSQL en contenedor Docker
docker run --name postgreSQL -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin12345 -p 5432:5432 -d postgres:17.6

# Acceder al contenedor y crear la base de datos
docker exec -it postgreSQL psql -U postgres -c "CREATE DATABASE gatos_db;"

# Verificar que la base de datos fue creada
docker exec -it postgreSQL psql -U postgres -c "\l"
```

La tabla gatos se crea automáticamente al iniciar el backend gracias a SQLAlchemy. El modelo incluye:

id (Integer, Primary Key)
nombre (String)
raza (String)
edad (Integer)
foto (String - URL de TheCatAPI)
Credenciales de BD

Host: localhost:5432
Database: gatos_db
Username: postgres
Password: admin12345

### Prerrequisitos
- Node.js 18+
- Python 3.9+
- PostgreSQL 17+

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
ng serve
```

🌐 URLs de la Aplicación

Frontend: http://localhost:4200
Backend API: http://localhost:8000
Documentación API: http://localhost:8000/docs


📁 Estructura del Proyecto
```
fullstack-DUMAS/
├── backend/           # API FastAPI
├── frontend/          # App Angular
├── README.md         # Este archivo
└── requirements.txt  # Dependencias Python
```

🎯 Funcionalidades Principales

Módulo Imágenes

Ver 10 imágenes aleatorias de gatos
Marcar imágenes como favoritas (❤️)
Los favoritos se almacenan en TheCatAPI
Módulo Gatos

Listar todos los gatos registrados
Crear nuevos registros de gatos
Editar información existente
Eliminar registros
Seleccionar fotos desde favoritos
🔗 Endpoints del Backend

Imágenes

GET /imagenes - 10 imágenes aleatorias

POST /imagenes/favoritos - Marcar favorito

GET /imagenes/favoritos - Listar favoritos


Gatos

GET /gatos - Listar todos

GET /gatos/{id} - Obtener por ID

POST /gatos - Crear nuevo

PUT /gatos/{id} - Actualizar

DELETE /gatos/{id} - Eliminar


👨‍💻 Autor

Simon Suarez Ovalle - GitHub

Desarrollado como prueba técnica para posición Full Stack Developer

