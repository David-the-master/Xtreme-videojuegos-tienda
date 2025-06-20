from django.shortcuts import render, get_object_or_404
from django.db.models import Q, Case, When, IntegerField
from .models import Producto, Categoria, ImagenProducto, DescripcionProducto


def index(request):
    categorias = Categoria.objects.all()
    return render(request, 'tienda/index.html', {
        'categorias': categorias
    })


def productos(request):
    query = request.GET.get("search", "").strip().lower()
    filtro_categoria = request.GET.get("categoria")
    categorias = Categoria.objects.all()

    productos = Producto.objects.all()

    if query:
        productos = productos.filter(
            Q(nombre__icontains=query) |
            Q(descripcion__icontains=query) |
            Q(etiqueta__icontains=query) |
            Q(categoria__nombre__icontains=query)
        ).annotate(
            exact_nombre=Case(When(nombre__iexact=query, then=1), default=0, output_field=IntegerField()),
            contiene_nombre=Case(When(nombre__icontains=query, then=1), default=0, output_field=IntegerField()),
            contiene_etiqueta=Case(When(etiqueta__icontains=query, then=1), default=0, output_field=IntegerField()),
            contiene_desc=Case(When(descripcion__icontains=query, then=1), default=0, output_field=IntegerField()),
        ).order_by(
            '-exact_nombre',
            '-contiene_nombre',
            '-contiene_etiqueta',
            '-contiene_desc'
        )

    if filtro_categoria:
        productos = productos.filter(categoria__slug=filtro_categoria)

    return render(request, 'tienda/productos.html', {
        'productos': productos,
        'categorias': categorias,
        'busqueda': query,
        'categoria_activa': filtro_categoria
    })


def producto_detalle(request, slug):
    producto = get_object_or_404(Producto, slug=slug)
    imagenes = producto.galeria.all()
    categorias = Categoria.objects.all()
    descripcion_ext = getattr(producto, 'detalle', None)
    variantes = descripcion_ext.variantes.all() if descripcion_ext else []

    # Cálculo del descuento
    descuento = None
    if producto.precio_antiguo and producto.precio:
        try:
            descuento = round((1 - (producto.precio / producto.precio_antiguo)) * 100)
        except ZeroDivisionError:
            descuento = None

    return render(request, 'tienda/productos-detalle.html', {
        'producto': producto,
        'imagenes': imagenes,
        'categorias': categorias,
        'descuento': descuento,
        'descripcion_ext': descripcion_ext,
        'variantes': variantes,
        # NOTA: nombre_variante_estandar y sku vienen con `producto` directamente
    })
