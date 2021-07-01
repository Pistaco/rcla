from rest_framework import serializers
from .models import Pedido, Comprador, Direccion
from .pedido_productos.serializers import PedidoProductoSerializer


class CompradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comprador
        fields = "__all__"


class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = "__all__"


class PedidoSerializer(serializers.ModelSerializer):
    comprador = CompradorSerializer()
    direccion = DireccionSerializer()
    pedido_productos = PedidoProductoSerializer(many=True)

    class Meta:
        model = Pedido
        fields = "__all__"

    def create(self, validated_data):
        def extract_from_validated(key):
            return validated_data.pop(key)

        def handel_model_object(modelo, key):
            objeto = modelo(**extract_from_validated(key))
            objeto.save()
            return objeto

        pedidos_productos = extract_from_validated("pedido_productos")
        pedido = Pedido(
            **validated_data,
            comprador=handel_model_object(Comprador, "comprador"),
            direccion=handel_model_object(Direccion, "direccion")
        )
        pedido.save()
        PedidoProductoSerializer.safe_pedidos(pedidos_productos, pedido)
        return pedido


class TestPedidoSerializer(serializers.ModelSerializer):
    comprador = CompradorSerializer()
    direccion = DireccionSerializer()

    class Meta:
        model = Pedido
        fields = "__all__"

    def create(self, validated_data):
        def extract_from_validated(key):
            return validated_data.pop(key)

        def handel_model_object(modelo, key):
            objeto = modelo(**extract_from_validated(key))
            objeto.save()
            return objeto

        pedido = Pedido(
            **validated_data,
            comprador=handel_model_object(Comprador, "comprador"),
            direccion=handel_model_object(Direccion, "direccion")
        )
        pedido.save()
        return pedido
