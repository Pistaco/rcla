# Generated by Django 3.2.4 on 2021-06-16 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pedidos', '0009_alter_pedido_codigo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pedido',
            name='codigo',
            field=models.CharField(default='09eB61E', max_length=20),
        ),
    ]