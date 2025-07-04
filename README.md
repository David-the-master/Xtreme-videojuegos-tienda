# 🎮 Xtreme Videojuegos — Tienda Online (Django + PostgreSQL + Cloudinary)

Proyecto profesional de tienda virtual para productos relacionados con videojuegos. Permite administración de productos, categorías, imágenes y variantes desde un panel personalizado. Incluye:

- Panel de administración moderno con Jazzmin
- Base de datos PostgreSQL en la nube (Render)
- Archivos `media` alojados en **Cloudinary**
- Diseño frontend responsive personalizado
- Despliegue en Render

---

## 📁 Estructura del proyecto

```
xtreme_project/
├── tienda/              # Aplicación principal con modelos y vistas
├── static/tienda/       # Archivos CSS, JS, imágenes frontend
├── templates/tienda/    # Plantillas HTML del sitio
├── media/               # Imágenes cargadas desde el admin
├── manage.py
├── requirements.txt
├── README.md
└── .env                 # Variables ocultas (NO subir al repositorio)
```

---

## 🧱 Tecnologías utilizadas

- Django 5.x
- PostgreSQL (Render)
- HTML5, Bootstrap 5, CSS personalizado
- Django Jazzmin (panel admin mejorado)
- WhiteNoise (archivos estáticos)
- Python 3.12

---

## 🚀 Instalación local del proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/xtreme-videojuegos.git
cd xtreme-videojuegos
```

### 2. Crear entorno virtual
```bash
python -m venv env
env\Scripts\activate    # En Windows
source env/bin/activate  # En Linux/macOS
```

### 3. Instalar requerimientos
```bash
pip install -r requirements.txt
```

### 4. Crear archivo `.env` con los siguientes datos:

```
SECRET_KEY=tu_clave_secreta
DEBUG=True
DB_NAME=xtreme_db
DB_USER=xtreme_db_user
DB_PASSWORD=tu_contraseña
DB_HOST=dpg-xxxx.oregon-postgres.render.com
DB_PORT=5432
```

---

### 5. Aplicar migraciones y ejecutar servidor

```bash
python manage.py migrate
python manage.py runserver
```

---

## 🔐 Panel de administración

Accede al panel moderno:
```
http://127.0.0.1:8000/admin
```

**Usuario demo**: cliente_demo  
**Contraseña**: ********

---

## 🌐 Despliegue en Render

- Base PostgreSQL conectada en la nube
- Archivos estáticos servidos con WhiteNoise
- Sitio online: https://xtreme-videojuegos-tienda.onrender.com

---

## 🧪 Accesos

| Tipo de usuario | Usuario        | Contraseña   |
|-----------------|----------------|--------------|
| Admin           | admin          | ********     |
| Editor / Cliente| cliente_demo   | ********     |

---

## 🧾 Documentación adicional

- Manual de uso para el cliente → ver archivo `Manual_Xtreme_Cliente.pdf`
- Capturas del panel y guía rápida → carpeta `/documentacion/`

---

## 📄 Licencia y soporte

Proyecto creado por **Juan David Durán**  
Soporte técnico incluido por 3–4 meses desde la fecha de entrega.  
Contacto: juandavid@email.com
