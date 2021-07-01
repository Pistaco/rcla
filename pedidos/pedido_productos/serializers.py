from rest_framework import serializers
from .models import PedidoProducto
from productos.models import Producto
from productos.serializers import ProductosSerializer


class PedidoProductoSerializer(serializers.ModelSerializer):
    producto = ProductosSerializer()

    class Meta:
        model = PedidoProducto
        exclude = ("pedido",)

    @staticmethod
    def safe_pedidos(data, pedido):
        def return_pedidos():
            for pedido_producto in data:
                yield PedidoProducto(
                    producto=get_producto(pedido_producto),
                    pedido=pedido,
                    cantidad=pedido_producto["cantidad"]
                )

        def get_producto(pedido_producto):
            producto_data = pedido_producto.pop("producto")
            return Producto.objects.get(
                nombre=producto_data["nombre"],
                precio=producto_data["precio"],
                descripcion=producto_data["descripcion"]
            )

        def main():
            for pedido in return_pedidos():
                pedido.save()

        main()
