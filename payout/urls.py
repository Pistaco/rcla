from django.urls import path
from .views import create_checkout_session

urlpatterns = [
    path('create_checkout_session/<pk>', create_checkout_session),
]
