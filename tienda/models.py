from django.db import models

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
    descripcion = models.TextField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    precio_antiguo = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    stock = models.CharField(
        max_length=100,
        help_text="Ej: En stock, Últimas 3 unidades, Agotado"
    )
    imagen = models.ImageField(upload_to='productos/')
    etiqueta = models.CharField(
        max_length=50, blank=True,
        help_text="Ej: Nuevo, Oferta, Más vendido"
    )

    def __str__(self):
        return f"{self.nombre} ({self.categoria.nombre})"
