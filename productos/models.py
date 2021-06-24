from django.db import models


class Categoria(models.Model):
    nombre = models.CharField(max_length=15)
    super_categoria = models.ForeignKey("Categoria", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=200)
    categoria = models.TextField(max_length=50, default="")
    img = models.ImageField(upload_to="media", blank=True, null=True)
    precio = models.IntegerField()

    def __str__(self):
        return self.nombre



# Create your models here.
