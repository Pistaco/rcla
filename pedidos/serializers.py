from rest_framework import serializers
from .models import Pedidos, Comprador, Direccion


class CompradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comprador
        exclude = "__all__"


class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = "__all__"


class PedidoSerializer(serializers.ModelSerializer):
    comprador = CompradorSerializer(read_only=True)
    direccion = DireccionSerializer(read_only=True)

    class Meta:
        model = Pedidos
        fields = "__all__"

#("codigo",)
