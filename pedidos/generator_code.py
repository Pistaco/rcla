from random import sample
from string import hexdigits


def list_to_string(lista):
    return "".join(letter for letter in lista)


def generator_code():
    lenght = 7
    list_selecionados = sample(hexdigits, k=lenght)
    return list_to_string(list_selecionados)
