from django.shortcuts import render
from .models import Producto, Categoria
from django.db.models import Q, Case, When, IntegerField

def index(request):
    # Obtener todas las categorías para mostrarlas en la navbar del index
    categorias = Categoria.objects.all()
    return render(request, 'tienda/index.html', {
        'categorias': categorias
    })

def productos(request):
    query = request.GET.get("search", "").strip().lower()
    filtro_categoria = request.GET.get("categoria")
    categorias = Categoria.objects.all()

    # Obtener todos los productos por defecto
    productos = Producto.objects.all()

    if query:
        # Filtrar productos por coincidencias en varios campos, incluyendo la relación con Categoría
        productos = productos.filter(
            Q(nombre__icontains=query) |
            Q(descripcion__icontains=query) |
            Q(etiqueta__icontains=query) |
            Q(categoria__nombre__icontains=query)
        )

        # Anotar puntajes de relevancia para ordenar los resultados
        productos = productos.annotate(
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

    # Filtrar por categoría si viene el parámetro ?categoria=
    if filtro_categoria:
        productos = productos.filter(categoria__slug=filtro_categoria)

    return render(request, 'tienda/productos.html', {
        'productos': productos,
        'categorias': categorias,
        'busqueda': query,
        'categoria_activa': filtro_categoria
    })
