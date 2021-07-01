objeto_test_only_esencials = {
    "direccion": {
        "calle": "33",
        "calle_numero": 100,
        "descripcion": "u good"
    },
    "comprador": {
        "nombre": "HI",
        "correo": "ihelocarraco",
        "telefono": "899009"
    },
}

objeto_test = {
    **objeto_test_only_esencials,
    "codigo": "aaa",
    "fecha": "aaaaaa"
}

objeto_with_productos = {
    "comprador": {"nombre": "HI", "correo": "ihelocarraco", "telefono": "899009"},
    "direccion": {"calle": "33", "calle_numero": "100", "descripcion": "u good"},
    "pedido_productos": [
        {"producto": {
            "id": 1, "nombre": "Producto 1", "precio": 500, "descripcion": " a", "categoria": " b", "img": None
        },
         "cantidad": 1},
        {"producto": {
            "id": 2, "nombre": "Producto 2", "precio": 500, "descripcion": " a", "categoria": " b", "img": None
        },
         "cantidad": 1},
        {"producto": {
            "id": 3, "nombre": "Producto 3", "precio": 500, "descripcion": " a", "categoria": " b", "img": None
        },
         "cantidad": 1},
        {"producto": {
            "id": 4, "nombre": "Producto 4", "precio": 500, "descripcion": " a", "categoria": " b", "img": None
        },
         "cantidad": 1},
        {"producto": {
            "id": 5, "nombre": "Producto 5", "precio": 500, "descripcion": " a", "categoria": " b", "img": None
        },
         "cantidad": 1}],
}

"""
{
    "comprador": {"nombre": "HI", "correo": "ihelocarraco", "telefono": "899009"},
    "direccion": {"calle": "33", "calle_numero": "100", "descripcion": "u good"},
    "pedido_productos": [
        {"producto": {
            "id": 1, "nombre": "Producto 1", "precio": 500, "descripcion": " a", "categoria": " b", "img": null
        },
         "cantidad": 1},
        {"producto": {
            "id": 2, "nombre": "Producto 2", "precio": 500, "descripcion": " a", "categoria": " b", "img": null
        },
         "cantidad": 1},
        {"producto": {
            "id": 3, "nombre": "Producto 3", "precio": 500, "descripcion": " a", "categoria": " b", "img": null
        },
         "cantidad": 1},
        {"producto": {
            "id": 4, "nombre": "Producto 4", "precio": 500, "descripcion": " a", "categoria": " b", "img": null
        },
         "cantidad": 1},
        {"producto": {
            "id": 5, "nombre": "Producto 5", "precio": 500, "descripcion": " a", "categoria": " b", "img": null
        },
         "cantidad": 1}],
}

"""
