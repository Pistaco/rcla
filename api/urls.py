from django.urls import path
from .views import index, lista_productos, create_producto
urlpatterns = [
    path('', index),
    path("list-productos/", lista_productos),
    path("producto-create/", create_producto),
    path("producto-delete/<str:pk>", create_producto)
]
