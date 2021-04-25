
from django.test import TestCase, Client
from django.urls import reverse

cliente = Client()


class TestViews(TestCase):
    def test_initial(self):
        response = cliente.get("/api/").content
        print(response)
