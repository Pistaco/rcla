from django.test import TestCase

from .models import PedidoProducto
from ..models import Pedido
from .serializers import PedidoProductoSerializer
from pedidos.serializers import PedidoSerializer
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
        print(objeto_serializer.data)


class TestImplementation(TestCase):

    def test_implementation(self):
        pedido, *rest = build_pedido_with_data()
        for _ in range(5):
            PedidoProducto(
                producto=build_producto(),
                pedido=pedido
            )
        serializer = PedidoSerializer(pedido)
        print(serializer.data)


