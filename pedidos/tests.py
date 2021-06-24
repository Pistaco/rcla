from django.test import TestCase
from .serializers import PedidoSerializer, CompradorSerializer, DireccionSerializer

from .generator_code import generator_code
from .mocks import objeto_test
from .builders import build_pedido_with_data


def print_from_pedido_serializer(objeto):
    data_serializer = PedidoSerializer(objeto)
    print(data_serializer.data)




class SerializerTest(TestCase):
    def build(self):
        self.pedido, self.direccion, self.comprador = build_pedido_with_data()

    def save_objects(self):
        self.comprador.save()
        self.direccion.save()
        self.pedido.save()

    def test_build(self):
        self.build()

    def test_serializer(self):
        self.build()
        self.save_objects()


def crear_data():
    copy_data_test = objeto_test.copy()
    copy_data_test.pop("codigo")
    return copy_data_test


class DeserializerTest(TestCase):

    def test_direccion(self):
        objeto = DireccionSerializer(data=objeto_test["direccion"])
        objeto.is_valid()
        objeto.save()

    def test_comprador(self):
        objeto = CompradorSerializer(data=objeto_test["comprador"])
        objeto.is_valid()
        objeto.save()

    def test_all(self):
        objeto_with_list = {**objeto_test, "pedido_productos": []}
        objeto = PedidoSerializer(data=objeto_with_list)
        objeto.is_valid()
        objeto.save()


class CodeGenerator(TestCase):

    def test_genetor_code(self):
        code = generator_code()
        print(code)

    def test_implementation(self):
        pedido, *rest = build_pedido_with_data()
        self.assertTrue(pedido.codigo)


class ImplementacionMethods(TestCase):

    def test_field_entregado(self):
        pedido, *rest = build_pedido_with_data()
        self.assertFalse(pedido.entregado)
        pedido.change_entregado_field()
        self.assertTrue(pedido.entregado)
