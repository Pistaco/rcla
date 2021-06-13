from rest_framework import serializers
from .models import Pedido, Comprador, Direccion


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

    class Meta:
        model = Pedido
        fields = "__all__"

    def create(self, validated_data):
        comprador_data = validated_data.pop("comprador")
        direccion_data = validated_data.pop("direccion")
        comprador = Comprador(**comprador_data)
        direccion = Direccion(**direccion_data)

        comprador.save()
        direccion.save()
        pedido = Pedido(**validated_data, comprador=comprador, direccion=direccion)
        pedido.save()

        return pedido

#("codigo",)
