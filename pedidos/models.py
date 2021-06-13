from django.db import models
from .generator_code import generator_code


class Comprador(models.Model):
    nombre = models.CharField(max_length=50)
    correo = models.CharField(max_length=50)
    numero = models.CharField(max_length=15)


class Direccion(models.Model):
    calle = models.CharField(max_length=30)
    calle_numero = models.CharField(max_length=3)
    descripcion = models.TextField(max_length=100, blank=True, null=True)


class Pedido(models.Model):
    comprador = models.OneToOneField(Comprador, on_delete=models.CASCADE)
    direccion = models.OneToOneField(Direccion, on_delete=models.CASCADE)
    codigo = models.CharField(max_length=20, default=generator_code())
    fecha = models.DateTimeField(auto_now=True)