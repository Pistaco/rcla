from django.test import TestCase

from .models import PedidoProducto
from .serializers import PedidoProductoSerializer, ProductosSerializer
from pedidos.serializers import PedidoSerializer
from pedidos.mocks import objeto_with_productos
from pedidos.builders import build_pedido_with_data, build_producto


def save_all(*lista):
    [elemento.save() for elemento in lista]


class TestModel(TestCase):

    def test_build(self):
        pedido, *rest = build_pedido_with_data()
        producto = build_producto()

        save_all(*rest, pedido, producto)

        pedido_producto = PedidoProducto(
            producto=producto,
            pedido=pedido
        )

        pedido_producto.save()


class TestSerializer(TestCase):
    def test_serializer(self):
        pedido, *rest = build_pedido_with_data()
        objeto_modelo_PP = PedidoProducto(
            producto=build_producto(),
            pedido=pedido
        )
        objeto_serializer = PedidoProductoSerializer(objeto_modelo_PP)


class TestImplementation(TestCase):

    def test_implementation(self):
        pedido, *rest = build_pedido_with_data()
        save_all(*rest, pedido)
        for _ in range(5):
            producto = build_producto()
            producto.save()
            PedidoProducto(
                producto=producto,
                pedido=pedido
            ).save()
        serializer = PedidoSerializer(pedido)

    def test_deserializer(self):
        def create_productos():
            pedido_productos = objeto_with_productos["pedido_productos"]
            for producto_pedido in pedido_productos:
                data = producto_pedido["producto"]
                serializer = ProductosSerializer(data=data)
                serializer.is_valid()
                serializer.save()

        create_productos()
        objeto = PedidoSerializer(data=objeto_with_productos)
        objeto.is_valid()
        objeto.save()
