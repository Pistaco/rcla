from .models import Comprador, Direccion, Pedido
from .pedido_productos.models import PedidoProducto
from .mocks import objeto_test_only_esencials
from productos.models import Producto


def delete_if_exist(key, dicc):
    if key in dicc:
        dicc.pop(key)


def build_elements_for_pedido(**arguments):
    comprador = Comprador(**arguments.pop("comprador"))
    direccion = Direccion(**arguments.pop("direccion"))
    pedido = Pedido(
        **arguments,
        comprador=comprador,
        direccion=direccion
    )
    return pedido, direccion, comprador


def build_pedido_with_data():
    return build_elements_for_pedido(**objeto_test_only_esencials)


def build_producto(numero=1):
    return Producto(nombre=f"Producto {numero}", precio=500 * numero)


def build_many_pedido_productos(producto, pedido):
    return [PedidoProducto(producto=producto, pedido=pedido) for _ in range(5)]
