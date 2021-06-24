from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from django.conf import settings


def send_email(data, codigo):
    content = create_mail(data, codigo)
    destinatario = data["correo"]
    object_for_sending = create_object_for_sending(destinatario)
    object_for_sending.attach_alternative(content, "text/html")
    object_for_sending.send()


def create_mail(data, codigo):
    template = get_template("correo.html")
    data["codigo"] = codigo
    return template.render(data)


def create_object_for_sending(destinatario, admin=None):
    email = EmailMultiAlternatives(
        f"Se ha confirmado su compra en RCLA!",
        "",
        settings.EMAIL_HOST_USER,
        [destinatario, admin]
    )
    return email


