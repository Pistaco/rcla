# Generated by Django 3.2.4 on 2021-06-16 16:23

from django.db import migrations, models
import pedidos.generator_code


class Migration(migrations.Migration):

    dependencies = [
        ('pedidos', '0010_alter_pedido_codigo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pedido',
            name='codigo',
            field=models.CharField(default=pedidos.generator_code.generator_code, max_length=20),
        ),
    ]
