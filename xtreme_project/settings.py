from pathlib import Path
import os

# Base
BASE_DIR = Path(__file__).resolve().parent.parent

# Seguridad
SECRET_KEY = os.environ.get('SECRET_KEY', 'django-insecure-#x_17^c(0sz)x2isek!knq--$kqt2^@&q$xv_lw-o(3o4n016x')
DEBUG = os.environ.get('DEBUG', 'True') == 'True'
ALLOWED_HOSTS = []

# Apps
INSTALLED_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'tienda',
]


# Configuración de Jazzmin (personaliza el panel admin)
JAZZMIN_SETTINGS = {
    "site_title": "Xtreme Videojuegos",  # Título en la pestaña del navegador
    "site_header": "Admin Xtreme",  # Título en la parte superior del panel
    "site_brand": "Xtreme panel",  # Marca/logo en el sidebar
    "welcome_sign": "Bienvenido a Xtreme Panel",  # Mensaje de bienvenida al iniciar sesión
    "copyright": "Xtreme Videojuegos",
    
    # Ruta del logo (mejor usar .png de fondo transparente)
    "site_logo": "tienda/imagenes/xtreme-icono.ico",  # ← Usa .png mejor que .ico

    # Visual y navegación
    "show_sidebar": True,
    "navigation_expanded": True,

    # Modelos y apps
    "hide_apps": [],
    "hide_models": [],
    "order_with_respect_to": ["tienda"],

    # Íconos personalizados para modelos
    "icons": {
        "auth.User": "fas fa-user",
        "auth.Group": "fas fa-users",
        "tienda.Producto": "fas fa-gamepad",
        "tienda.Categoria": "fas fa-tags",
        "tienda.DescripcionProducto": "fas fa-info-circle",
    },
}

# Si usas modo oscuro:
JAZZMIN_UI_TWEAKS = {
    "theme": "cyborg",  # Base oscura
    "navbar_small_text": False,
    "accent": "cyan",              # Color de acento (iconos activos, detalles)
    "navbar": "navbar-dark bg-dark",
    "body_small_text": False,
    "brand_colour": "navbar-dark bg-primary",  # Encabezado
    "sidebar": "sidebar-dark-primary",         # Sidebar izquierdo
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": True,
}




# Middleware
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'xtreme_project.urls'

# Templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'xtreme_project.wsgi.application'

# Base de datos
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'xtreme_db',
        'USER': 'xtreme_db_user',
        'PASSWORD': 'xbwI1XjXX4ZSY7wAdR5huf3waF29a7JG',
        'HOST': 'dpg-d1i1k7mmcj7s73ef7p4g-a.oregon-postgres.render.com',
        'PORT': '5432',
    }
}


# Validación de contraseñas
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internacionalización
LANGUAGE_CODE = 'es'
TIME_ZONE = 'America/Bogota'
USE_I18N = True
USE_TZ = True

# Archivos estáticos
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'tienda/static')]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Archivos media (local)
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Auto Field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
