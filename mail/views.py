from rest_framework import response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from django.conf import settings


def send_email(data):
    content = create_mail(data)
    destinatario = data["correo"]
    object_for_sending = create_object_for_sending(destinatario)
    object_for_sending.attach_alternative(content, "text/html")
    object_for_sending.send()


def create_mail(data):
    template = get_template("correo.html")
    return template.render(data)


def create_object_for_sending(destinatario):
    email = EmailMultiAlternatives(
        f"Se ha confirmado su compra en RCLA!",
        "",
        settings.EMAIL_HOST_USER,
        [destinatario]
    )
    return email


@api_view(["POST"])
def index(request):
    try:
        send_email(request.data)
        return Response("Ok")
    except:
        return Response("error, no se pudo enviar el correro", status=403)

