from django.urls import path
from .views import index,\
    lista_productos,\
    create_producto,\
    delete_producto,\
    search_box,\
    create_categoria,\
    get_by_categoria, \
    get_by_id

urlpatterns = [
    path('', index),
    path("list", lista_productos),
    path("producto-create", create_producto),
    path("producto-get/<str:pk>", get_by_id),
    path("producto-delete/<str:pk>", delete_producto),
    path("producto-search/<str:search>", search_box),
    path("categoria-search/<str:search>", get_by_categoria),
    path("categoria-create", create_categoria),
]
