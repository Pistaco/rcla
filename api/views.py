from rest_framework.decorators import api_view
from rest_framework.response import Response
from productos.models import Producto, Categoria
from productos.serializers import ProductosSerializer, CategoriaSerializer
from django.views.decorators.csrf import ensure_csrf_cookie


@api_view(["GET"])
def index(request):
    api_urls = {
        "List": "/list",
        "Detalle": "/detalle/<str:pk>",
        "Crear_pruducto": "/producto-create",
        "Eliminar_Producto": "/producto-delete/<str:pk>",
        "Buscar_Producto": "/producto-search/<str:search>"
    }
    return Response(api_urls)


@api_view(["POST"])
@ensure_csrf_cookie
def create_producto(requets):
    objeto = ProductosSerializer(data=requets.data)
    if objeto.is_valid():
        objeto.save()
        return Response("OK")
    return Response("Not", status=403)


@api_view(["POST"])
@ensure_csrf_cookie
def delete_producto(requets, pk):
    objeto = Producto.objects.get(pk=pk)
    objeto.delete()
    return Response("OK")


@api_view(["POST"])
def create_categoria(requets):
    objeto = CategoriaSerializer(data=requets.data)
    if objeto.is_valid():
        objeto.save()
        return Response("OK")
    return Response("Not", status=403)


@api_view(["GET"])
def get_by_categoria(request, search):
    lista = Producto.objects.filter(categoria__startswith=search)
    serializada = ProductosSerializer(many=True, data=lista)
    serializada.is_valid()
    return Response(serializada.data)


@api_view(["POST"])
def delete_categoria(requets):
    pass


@api_view(["GET"])
def lista_productos(requets):
    objetos = Producto.objects.all()
    serializado = ProductosSerializer(data=objetos, many=True)
    serializado.is_valid()
    return Response(serializado.data)


@api_view(["GET"])
def search_box(request, search):
    lista = Producto.objects.filter(nombre__startswith=search)
    lista_serializada = ProductosSerializer(data=lista, many=True)
    lista_serializada.is_valid()
    return Response(lista_serializada.data)


@api_view(["GET"])
def get_by_id(request, pk):
    producto = Producto.objects.get(id=pk)
    serializado = ProductosSerializer(producto)
    return Response(serializado.data)
