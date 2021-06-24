from django.urls import path
from .views import create_pedido, get_pedidos, pedido_check

urlpatterns = [
    path("create/", create_pedido),
    path("check/<str:pk>", pedido_check),
    path("list-pedidos/", get_pedidos)
]
