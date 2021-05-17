from django.test import TestCase, Client
requests = Client()


class TestPayout(TestCase):
    def testView(self):
        respuesta = requests.post("/payout")
        print(respuesta.content)
