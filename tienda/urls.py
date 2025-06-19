from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # http://localhost:8000/
    path('productos/', views.productos, name='productos'),  # http://localhost:8000/productos/
]
