from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PedidoSerializer
from .models import Pedido
from .send_email import send_email


@api_view(["POST"])
def create_pedido(request):
    serializer = PedidoSerializer(data=request.data)
    if serializer.is_valid():
        objeto_model = serializer.save()
        send_email(
            data=serializer.data["comprador"],
            codigo=objeto_model.codigo)
        return Response(objeto_model.codigo)
    return Response(serializer.errors, status=400)


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
