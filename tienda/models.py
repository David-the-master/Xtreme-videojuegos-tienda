from django.db import models
from cloudinary.models import CloudinaryField


class Categoria(models.Model):
    nombre = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(
        unique=True,
        help_text="Identificador único sin espacios (ej: consola, juego)"
    )
    icono = models.CharField(
        max_length=50,
        blank=True,
        help_text="Clase de ícono (ej: 'mdi:gamepad-variant')"
    )

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(
        max_length=150,
        help_text="Descripción breve para mostrar en la tarjeta del producto"
    )
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    precio = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        help_text="Precio del producto o versión principal"
    )
    precio_antiguo = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    sku = models.CharField(
        max_length=100,
        help_text="Código único de esta versión estándar"
    )
    nombre_variante_estandar = models.CharField(
        max_length=100,
        blank=True,
        help_text="Nombre de la variante estándar. Ej: 512GB estándar, Edición base"
    )
    stock = models.CharField(
        max_length=100,
        help_text="Ej: En stock, Últimas 3 unidades, Agotado"
    )
    imagen = CloudinaryField('imagen', blank=True, null=True)  # CAMBIO
    etiqueta = models.CharField(
        max_length=50,
        blank=True,
        help_text="Ej: Nuevo, Oferta, Más vendido"
    )
    slug = models.SlugField(
        unique=True,
        blank=True,
        help_text="URL única para cada producto"
    )

    def __str__(self):
        return f"{self.nombre} ({self.categoria.nombre})"


class ImagenProducto(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE, related_name="galeria")
    imagen = CloudinaryField('galeria', blank=True, null=True)  # CAMBIO

    def __str__(self):
        return f"Imagen de {self.producto.nombre}"


class DescripcionProducto(models.Model):
    producto = models.OneToOneField(Producto, on_delete=models.CASCADE, related_name='detalle')
    
    titulo_superior = models.CharField(
        max_length=100,
        blank=True,
        help_text="Texto pequeño superior (Ej: Consola de videojuegos)"
    )
    titulo_personalizado = models.CharField(
        max_length=100,
        blank=True,
        help_text="Título principal grande (Ej: PlayStation 5 Edición Digital)"
    )
    subtitulo = models.CharField(max_length=255, blank=True)
    caracteristicas = models.TextField(
        blank=True,
        help_text="HTML con íconos y características destacadas"
    )
    descripcion_larga = models.TextField(
        blank=True,
        help_text="Texto completo con beneficios y detalles. Usa doble enter para párrafos."
    )
    accesorios = models.TextField(
        blank=True,
        help_text="Accesorios compatibles u opcionales. Usa doble enter para separar líneas"
    )
    video_url = models.URLField(
        blank=True,
        help_text="URL del video de YouTube o demostración"
    )

    def __str__(self):
        return f"Detalle de {self.producto.nombre}"

    class Meta:
        verbose_name = "Descripción avanzada"
        verbose_name_plural = "Descripciones de productos"


class VarianteProducto(models.Model):
    descripcion = models.ForeignKey(
        DescripcionProducto,
        on_delete=models.CASCADE,
        related_name='variantes',
        help_text="Relación con descripción avanzada del producto"
    )
    nombre = models.CharField(
        max_length=100,
        help_text="Ej: 1TB Edición especial, Azul"
    )
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    precio_antiguo = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    sku = models.CharField(
        max_length=100,
        help_text="Código único de esta variante (visible o interno)"
    )

    def __str__(self):
        return f"{self.nombre} - {self.descripcion.producto.nombre}"


class EspecificacionProducto(models.Model):
    descripcion = models.ForeignKey(
        DescripcionProducto,
        on_delete=models.CASCADE,
        related_name='especificaciones'
    )
    titulo = models.CharField(
        max_length=100,
        help_text="Ej: Procesador, Memoria, Resolución"
    )
    valor = models.CharField(
        max_length=255,
        help_text="Ej: AMD Ryzen 5, 1TB SSD, 4K HDR"
    )

    def __str__(self):
        return f"{self.titulo}: {self.valor}"
