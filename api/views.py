from rest_framework.decorators import api_view
from rest_framework.response import Response
from productos.models import Producto, Categoria
from productos.serializers import ProductosSerializer, CategoriaSerializer
# Create your views here.


@api_view(["GET"])
def index(request):
    api_urls = {
        "List": "/list-productos/",
        "Detalle": "/detalle/<str:pk>",
        "Crear_pruducto": "/producto-create/",
        "Eliminar_Producto": "/delete_producto/<str:pk>"
    }
    return Response(api_urls)


@api_view(["POST"])
def create_producto(requets):
    objeto = ProductosSerializer(data=requets.data)
    if objeto.is_valid():
        objeto.save()
        return Response("OK")
    return Response("NOT")


@api_view(["POST"])
def delete_producto(requets, pk):
    objeto = Producto.objects.get(pk=pk)
    objeto.delete()


@api_view(["POST"])
def create_categoria(requets):
    pass


@api_view(["POST"])
def delete_categoria(requets):
    pass


@api_view(["GET"])
def lista_productos(requets):
    objetos = Producto.objects.all()
    serializado = ProductosSerializer(data=objetos, many=True)
    serializado.is_valid()
    return Response(serializado.data)
