## 🚀 Xtreme Videojuegos — Catálogo Virtual Administrable (Django + PostgreSQL + Cloudinary)

**Xtreme Videojuegos** es una plataforma web profesional para la exhibición de consolas, videojuegos y accesorios gamer. Está construida con Django 5 y permite gestionar productos, categorías, imágenes, variantes y descripciones avanzadas desde un panel moderno sin necesidad de conocimientos técnicos.

> Actualmente funciona como un catálogo interactivo de productos, pero su arquitectura está diseñada para escalar fácilmente hacia una tienda online completa con pasarela de pagos.

---

### 📌 Características principales

**Gestión del catálogo:**
- Sistema completo de productos con imágenes, precios, stock, etiquetas y variantes
- Galería de imágenes por producto con zoom y navegación tipo carrusel
- Descripciones enriquecidas con soporte para Markdown o CKEditor 5
- Tabla de especificaciones técnicas cargada desde el panel de administración
- Separación entre el producto general y su descripción extendida (`DescripcionProducto`)
- Variantes de producto que actualizan precio y SKU dinámicamente

**Interfaz y experiencia de usuario:**
- Diseño responsive adaptado a móvil, tablet y escritorio
- Vista detallada con pestañas animadas: descripción, especificaciones, accesorios y reseñas
- Buscador inteligente en frontend con filtrado instantáneo sin recargar la página

**Tecnología y despliegue:**
- Arquitectura basada en el patrón MVT (Modelo - Vista - Template) de Django
- Panel de administración personalizado usando Jazzmin
- Base de datos PostgreSQL alojada en Render
- Archivos `media` gestionados con Cloudinary
- Despliegue funcional usando Render con WhiteNoise para archivos estáticos
- Preparado para integrar pasarela de pagos en futuras versiones




## 📁 Estructura del proyecto

```plaintext
xtreme_project/
├── tienda/                            # App principal (catálogo, admin, views y lógica del sitio)
│   ├── admin.py                       # Configura cómo se presentan los modelos en el panel admin
│   ├── apps.py                        # Configuración de la aplicación para Django
│   ├── models.py                      # Modelos de datos (productos, categorías, etc.)
│   ├── views.py                       # Lógica de las vistas (mostrar productos, búsquedas, etc.)
│   ├── urls.py                        # Rutas específicas de la app "tienda"
│   ├── test.py                        # Pruebas automatizadas (unit tests y casos de uso futuros)
│
│   ├── templates/tienda/              # Plantillas HTML del frontend
│   │   ├── index.html                 # Página principal
│   │   ├── productos.html             # Página de catálogo de productos
│   │   └── productos-detalle.html     # Vista individual de cada producto
│
│   ├── templatetags/                 # Filtros personalizados para templates
│   │   ├── __init__.py               # Necesario para que Django detecte el módulo
│   │   ├── formato_precio.py         # Filtro para formatear precios (ej: 99.900 → $99.900)
│   │   └── markdown_filters.py       # Filtro para convertir Markdown a HTML seguro
│
│   ├── static/tienda/                # Archivos estáticos de la app (CSS, JS, imágenes)
│   │   ├── css/                      # Hojas de estilo organizadas por sección
│   │   │   ├── css-descripcion/
│   │   │   │   └── productos-detalle.css
│   │   │   ├── main/
│   │   │   │   ├── boton-hero.css
│   │   │   │   ├── separador.css
│   │   │   │   ├── styles.css
│   │   │   │   └── whatsapp.css
│   │   │   ├── productos/
│   │   │   │   └── productos.css
│   │   │   └── responsive/           # Estilos responsive separados por página
│   │   │       ├── responsive-descripcion-producto.css
│   │   │       ├── responsive-productos.css
│   │   │       └── responsive.css
│   │   ├── js/                       # Scripts organizados modularmente
│   │   │   ├── buscador/
│   │   │   │   └── navbar-toggle-search.js
│   │   │   ├── descripcion-producto/
│   │   │   │   ├── carrousel.js
│   │   │   │   ├── detalles.js
│   │   │   │   ├── lupa.js
│   │   │   │   └── producto-detalle.js
│   │   │   ├── main/
│   │   │   │   ├── efecto-h1.js
│   │   │   │   ├── mario.js
│   │   │   │   ├── particles-footer.js
│   │   │   │   ├── particles-hero.js
│   │   │   │   └── scroll.js
│   │   │   ├── navegacion/
│   │   │   │   └── control-nav-mobiles.js
│   │   │   ├── productos-js/
│   │   │   │   └── filtro.js
│   │   └── imagenes/                 # Íconos y elementos visuales del sitio (no media del admin)
│
│   └── migrations/                   # Archivos de migración (versión de base de datos por Django)
│
├── xtreme_project/                  # Carpeta del proyecto principal (core Django settings)
│   ├── __init__.py
│   ├── asgi.py                      # Configuración para despliegues asíncronos (ASGI, ej: WebSockets)
│   ├── settings.py                  # Configuración global (debug, apps, base de datos, estáticos, etc.)
│   ├── urls.py                      # Enrutamiento global del proyecto
│   └── wsgi.py                      # Configuración para servidores como Gunicorn/WSGI (entorno producción)
│
├── media/                           # Archivos subidos desde el admin (solo entorno local)
│   ├── productos/                   # Imágenes asociadas a productos subidos en el admin
│   └── galeria_productos/          # Otras imágenes de galería si usas galería adicional
│
├── manage.py                        # Script de Django para ejecutar comandos (runserver, makemigrations, etc.)
├── .gitignore                       # Archivos y carpetas que no deben subirse al repositorio
├── README.md                        # Documentación principal del proyecto
├── requirements.txt                 # Lista de dependencias del proyecto (paquetes pip)
└── build.sh                         # Script de despliegue automático para Render o servicios cloud

```

---


## 🧱 Tecnologías utilizadas

- **Python 3.12** — Lenguaje de programación principal.
- **Django 5.2.3** — Framework web backend usado para construir todo el sistema.
- **PostgreSQL** — Base de datos relacional (Render como hosting).
- **Bootstrap 5 + CSS personalizado** — Diseño frontend responsivo y visualmente atractivo.
- **Django Jazzmin** — Tema profesional para el panel de administración.
- **django-ckeditor-5** — Editor visual enriquecido para descripciones desde el admin.
- **Markdown2 + Bleach** — Renderizado seguro de descripciones en Markdown.
- **Pillow** — Manejo de imágenes (modelos y media).
- **WhiteNoise** — Servidor de archivos estáticos en producción.
- **Gunicorn** — Servidor WSGI para desplegar la aplicación en Render.
- **psycopg2-binary** — Conector entre Django y PostgreSQL.
- **tzdata / sqlparse** — Zonas horarias y formato de queries SQL para el entorno admin.


## 🚀 Instalación local del proyecto

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/xtreme-videojuegos.git
cd xtreme-videojuegos
```

### 2. Crear entorno virtual
```bash
python -m venv env

# En Windows
env\Scripts\activate

# En Linux/macOS
source env/bin/activate
```

### 3. Instalar requerimientos del proyecto
```bash
pip install -r requirements.txt
```

### 4. Crear archivo `.env` con las variables necesarias

Crea un archivo llamado `.env` en la raíz del proyecto y agrega el siguiente contenido:

```env
SECRET_KEY=tu_clave_secreta
DEBUG=True
DB_NAME=xtreme_db
DB_USER=xtreme_db_user
DB_PASSWORD=tu_contraseña
DB_HOST=dpg-xxxx.oregon-postgres.render.com
DB_PORT=5432
```

Puedes generar una nueva clave segura para `SECRET_KEY` con el siguiente comando:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

### 5. Aplicar migraciones y ejecutar el servidor local
```bash
python manage.py migrate
python manage.py runserver
```

El servidor estará disponible en: [http://localhost:8000](http://localhost:8000)

## 🔐 Panel de administración

Accede al panel moderno:
```
http://127.0.0.1:8000/admin
```

**Usuario demo**: cliente_demo  
**Contraseña**: ********

---
## 🌐 Despliegue en Render

- ✅ Base de datos **PostgreSQL** alojada en la nube (Render)
- ✅ Archivos estáticos servidos mediante **WhiteNoise**
- 🌍 Sitio en línea: [xtreme-videojuegos-tienda.onrender.com](https://xtreme-videojuegos-tienda.onrender.com)

---

## 🔐 Accesos de demostración

| Tipo de usuario    | Usuario       | Contraseña   |
|--------------------|---------------|--------------|
| Administrador      | `admin`       | ********     |
| Editor / Cliente   | `cliente_demo`| ********     |

> ⚠️ *Las credenciales reales serán entregadas al cliente al finalizar el desarrollo.*

---

## 📘 Documentación adicional

- 📄 Manual de uso → [`Manual_Xtreme_Cliente.pdf`](./documentacion/Manual_Xtreme_Cliente.pdf)
- 🖼️ Capturas y guía rápida → carpeta [`/documentacion/`](./documentacion/)

---

## 📄 Licencia y soporte

Este proyecto fue creado por **Juan David Durán**  
🛠️ Incluye soporte técnico por **3 a 4 meses** tras la entrega final.  
📬 Contacto: [juandavid@email.com](mailto:juandavid@email.com)

> 🔧 *Proyecto aún en desarrollo. Algunas funcionalidades y documentación pueden seguir ajustándose en futuras versiones.*
