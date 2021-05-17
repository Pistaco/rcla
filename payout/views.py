from rest_framework.decorators import api_view
from rest_framework.response import Response
import stripe

from productos.models import Producto
YOUR_DOMAIN = "http://localhost:3000/"


def calculate_order_amount(items):
    # Replace this constant with a calculation of the order's amount
    # Calculate the order total on the server to prevent
    # people from directly manipulating the amount on the client
    return 1400


@api_view(["POST"])
def create_checkout_session(request, pk):
    producto = Producto.objects.get(pk)
    checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'unit_amount': producto.precio,
                        'product_data': {
                            'name': producto.nombre,
                            # 'images': ['https://i.imgur.com/EHyR2nP.png'],
                        },
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '?success=true',
            cancel_url=YOUR_DOMAIN + '?canceled=true',
        )
    return Response({'id': checkout_session.id})
