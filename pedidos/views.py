from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PedidoSerializer
from .models import Pedido


@api_view(["POST"])
def create_pedido(request):
    serializer = PedidoSerializer(data=request.data)
    if serializer.is_valid():
        objeto_model = serializer.save()
        return Response(objeto_model.codigo)
    return Response(serializer.errors, status=400)


@api_view(["GET"])
def get_pedidos(request):
    lista = Pedido.objects.all()
    lista_serializada = PedidoSerializer(lista, many=True)
    lista_serializada.is_valid()
    return Response(lista_serializada.data)
