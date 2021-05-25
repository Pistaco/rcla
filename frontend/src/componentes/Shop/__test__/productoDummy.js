
export const productoDommy = {
    nombre: "Producto x",
    precio: 100,
    descripcion: "UWU",
}

const listaDeProductos = [
    productoDommy, productoDommy, productoDommy,
    productoDommy, productoDommy, productoDommy,
    productoDommy, productoDommy, productoDommy,
    productoDommy,
].map((value, index) => ({...value, id: index, }))

export {listaDeProductos}
