from django.test import TestCase
from .models import Pedidos, Comprador, Direccion
from .serializers import PedidoSerializer, CompradorSerializer, DireccionSerializer


def print_from_pedido_serializer(objeto):
    data_serializer = PedidoSerializer(objeto)
    print(data_serializer.data)


class SerializerTest(TestCase):
    def build(self):
        self.comprador = Comprador(nombre="Helo", correo="ihelocarraco", numero="569799")
        self.direccion = Direccion(calle_numero=100, calle="Los canijos")
        self.pedido = Pedidos(codigo="ashdjad", comprador=self.comprador, direccion=self.direccion)

    def save_objects(self):
        self.comprador.save()
        self.direccion.save()
        self.pedido.save()

    def test_build(self):
        self.build()

    def test_serializer(self):
        self.build()
        self.save_objects()
        print_from_pedido_serializer(self.pedido)


objeto_test = {
    "direccion": {
        "calle": "33",
        "calle_numero": 100,
        "descripcion": "u good"
    },
    "comprador": {
        "nombre": "HI",
        "correo": "ihelocarraco",
        "numero": "899009"
    },
    "codigo": "aaa",
    "fecha": "aaaaaa"
}


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
        objeto = PedidoSerializer(data=objeto_test)
        objeto.is_valid()
        objeto.save()






