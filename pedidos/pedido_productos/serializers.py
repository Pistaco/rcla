from rest_framework import serializers
from .models import PedidoProducto
from productos.serializers import ProductosSerializer


class PedidoProductoSerializer(serializers.ModelSerializer):
    producto = ProductosSerializer(read_only=True)

    class Meta:
        model = PedidoProducto
        exclude = ("pedido",)
