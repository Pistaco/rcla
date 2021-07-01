from django.urls import path
from .views import create_pedido, get_pedidos, pedido_check, pedido_search

urlpatterns = [
    path("create/", create_pedido),
    path("check/<str:pk>", pedido_check),
    path("search/<str:search>", pedido_search),
    path("list-pedidos/", get_pedidos)
]
