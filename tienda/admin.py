from django.contrib import admin
from .models import Producto, Categoria

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'slug', 'icono')
    fields = ('nombre', 'slug', 'icono')
    prepopulated_fields = {'slug': ('nombre',)}
    search_fields = ('nombre',)
    ordering = ['nombre']

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'categoria', 'precio', 'stock', 'etiqueta')
    search_fields = ('nombre', 'descripcion')
    list_filter = ('categoria', 'etiqueta')
    ordering = ['nombre']
