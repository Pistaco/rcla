export const subirCantidad = producto => ({
    ...producto,
    cantidad: producto.cantidad + 1
})

export const createProductoForCarrito = producto => ({
    ...producto,
    cantidad: 0,
})

export const bajarCantidad = producto => ({
    ...producto,
    cantidad:  producto.cantidad - 1
})
