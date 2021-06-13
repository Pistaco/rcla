from django.urls import path
from .views import create_pedido, get_pedidos

urlpatterns = [
    path("create/", create_pedido),
    path("get_all_pedidos/", get_pedidos)
]