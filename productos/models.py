from django.db import models
from django.contrib import admin


class Categoria(models.Model):
    nombre = models.CharField(max_length=15)
    super_categoria = models.CharField(max_length=15, default=None, unique=False, null=True)

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=200)
    categoria = models.TextField(max_length=50, default="")
    img = models.ImageField(upload_to="media")
    precio = models.IntegerField()

    def __str__(self):
        return self.nombre


admin.site.register(Categoria)
admin.site.register(Producto)
# Create your models here.
