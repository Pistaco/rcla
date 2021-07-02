from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PedidoSerializer
from .models import Pedido


def delete_images(data):
    for pedido_producto in data["pedido_productos"]:
        pedido_producto["producto"].pop("img")


@api_view(["POST"])
def create_pedido(request):
    delete_images(request.data)
    serializer = PedidoSerializer(data=request.data)
    if serializer.is_valid():
        objeto_model = serializer.save()
        """
        send_email(
            data=serializer.data["comprador"],
            codigo=objeto_model.codigo
        )
        """
        return Response(objeto_model.codigo)
    print(serializer.errors)
    return Response({
        "error_serializer": serializer.errors
    }, status=400)


@api_view(["GET"])
def get_pedidos(request):
    lista = Pedido.objects.all().order_by("entregado")
    lista_serializada = PedidoSerializer(lista, many=True).data
    return Response(lista_serializada)


@api_view(["POST"])
def pedido_check(request, pk):
    pedido = Pedido.objects.get(pk=pk)
    pedido.change_entregado_field()
    pedido.save()
    return Response("ok")


@api_view(["GET"])
def pedido_search(request, search):
    print(search)
    lista = Pedido.objects.filter(comprador__nombre__startswith=search)
    lista_serializada = PedidoSerializer(data=lista, many=True)
    lista_serializada.is_valid()
    return Response(lista_serializada.data)
