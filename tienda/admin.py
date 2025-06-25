from django.contrib import admin
from .models import (
    Producto,
    Categoria,
    ImagenProducto,
    DescripcionProducto,
    VarianteProducto,
    EspecificacionProducto  # ← Nuevo modelo
)

# Galería de imágenes
class ImagenProductoInline(admin.TabularInline):
    model = ImagenProducto
    extra = 1
    fields = ['imagen']
    verbose_name = "Imagen adicional"
    verbose_name_plural = "Galería de imágenes"

# Variantes adicionales (relacionadas con la descripción)
class VarianteProductoInline(admin.TabularInline):
    model = VarianteProducto
    extra = 1
    fields = ['nombre', 'precio', 'precio_antiguo', 'sku']
    verbose_name = "Variante adicional"
    verbose_name_plural = "Variantes del producto"

# Nueva sección inline para especificaciones técnicas
class EspecificacionProductoInline(admin.TabularInline):
    model = EspecificacionProducto
    extra = 1
    fields = ['titulo', 'valor']
    verbose_name = "Especificación técnica"
    verbose_name_plural = "Especificaciones del producto"

# Admin de Categoría
@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'slug', 'icono')
    fields = ('nombre', 'slug', 'icono')
    prepopulated_fields = {'slug': ('nombre',)}
    search_fields = ('nombre',)
    ordering = ['nombre']

# Admin de Producto con variante estándar (opcional) y galería
@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'categoria', 'nombre_variante_estandar', 'precio', 'stock', 'etiqueta')
    search_fields = ('nombre', 'descripcion', 'sku', 'nombre_variante_estandar')
    list_filter = ('categoria', 'etiqueta')
    ordering = ['nombre']
    prepopulated_fields = {'slug': ('nombre',)}

    fieldsets = (
        (None, {
            'fields': (
                'nombre',
                'descripcion',
                'categoria',
                'nombre_variante_estandar',
                'precio',
                'precio_antiguo',
                'sku',
                'stock',
                'imagen',
                'etiqueta',
                'slug',
            ),
            'description': "El campo 'Nombre de la variante estándar' es opcional. Úsalo solo si el producto tiene versiones como 512GB, Edición base, etc."
        }),
    )

    inlines = [ImagenProductoInline]

# Admin de Descripción avanzada con variantes adicionales y especificaciones
@admin.register(DescripcionProducto)
class DescripcionProductoAdmin(admin.ModelAdmin):
    list_display = ('producto', 'titulo_superior', 'titulo_personalizado', 'subtitulo')
    search_fields = ('producto__nombre', 'titulo_superior', 'titulo_personalizado', 'subtitulo')
    
    fieldsets = (
        (None, {
            'fields': (
                'producto',
                'titulo_superior',
                'titulo_personalizado',
                'subtitulo',
                'caracteristicas',
                'descripcion_larga',
                'accesorios',
                'video_url'
            )
        }),
    )

    inlines = [VarianteProductoInline, EspecificacionProductoInline]
