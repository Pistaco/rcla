from django.db import models
from pedidos.models import Pedido
from productos.models import Producto


# Create your models here.
class PedidoProducto(models.Model):
    cantidad = models.IntegerField(default=1)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE, related_name="pedido_productos")



