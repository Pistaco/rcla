from django.test import TestCase, Client
from .models import Categoria, Producto
from PIL import Image


def crear_productos():
    nombres_productos = ("PC", "LAPTOP", "TARRO")
    precios = (100, 200, 300)
    for nombre, precio in zip(nombres_productos, precios):
        producto_creado = Producto(nombre=nombre, precio=precio)
        producto_creado.save()


def ver_productos():
    lista = Producto.objects.all()
    print(lista)


def consultar_api():
    cliente = Client()
    datos = cliente.get("/api/list-productos/").content
    print(datos)


def generar_json():
    return {
        "nombre": "TARRO",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
        "precio": 500,
    }


def send_to_api(json):
    cliente = Client()
    respuesta = cliente.post(data=json, path="/api/producto-create")
    return respuesta.content


class TestsProductos(TestCase):

    def productos_model(self):
        crear_productos()
        ver_productos()

    def productos_api(self):
        crear_productos()
        consultar_api()

    def test_producto_from_json(self):
        json = generar_json()
        respuesta = send_to_api(json)
        self.assertEqual(respuesta, b'"OK"')
        ver_productos()
