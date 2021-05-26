import {listaDeProductos} from "./productoDummy";

import {
    addToCarrito,
    carritoData,
    generalExistOrDo,
    setCarritoData,
    modificateOneProductoInList,
    sumProducto,
    changeCantidadProducto,
} from "./CarritoFnMocks"

const [producto1, producto2, producto3]  = listaDeProductos

const setupExistOrDo = producto => {
    const TrueFn = jest.fn()
    const FalseFn = jest.fn()
    generalExistOrDo(TrueFn)(FalseFn)(producto)
    return {TrueFn, FalseFn}
}

afterEach(() => setCarritoData([]))
describe("Test nivel externo", () => {
    it("test add", () => {
        addToCarrito(producto1)
        expect(carritoData.length).toBe(1)
    })

    it('test add 2', () => {
        addToCarrito(producto1)
        addToCarrito(producto2)
        expect(carritoData.length).toBe(2)
    });

    it("test add 3 equal", () => {
        addToCarrito(producto1)
        addToCarrito(producto1)
        addToCarrito(producto1)
        expect(carritoData).toHaveLength(1)
        expect(carritoData.pop().cantidad).toBe(3)
    })

    it("test cantidad", () => {
        addToCarrito(producto1)
        addToCarrito(producto1)
        expect(carritoData.pop().cantidad).toBe(2)
    })

})

describe("Test nivel interno", () => {
    describe("ExistOrDo", () => {
        it('False opcion', () => {
            const {FalseFn, TrueFn}= setupExistOrDo(producto1)
            expect(FalseFn.mock.calls).toHaveLength(1)
            expect(TrueFn.mock.calls).toHaveLength(0)
        });
        it("True opcion", () => {
            setCarritoData([producto1])
            const {TrueFn, FalseFn} = setupExistOrDo(producto1)
            expect(TrueFn.mock.calls).toHaveLength(1)
            expect(FalseFn.mock.calls).toHaveLength(0)
        })
    })
    describe("MapToTheList", () => {
        it("encontrar", () => {
            const encontrar = jest.fn()
            setCarritoData([producto1])
            modificateOneProductoInList(encontrar)(producto1)
            expect(encontrar.mock.calls).toHaveLength(1)
        })

        it("no encontrar", () => {
            const encontrar = jest.fn()
            modificateOneProductoInList(encontrar)(producto1)
            expect(encontrar.mock.calls).toHaveLength(0)
        })
    })

    it("changeCantidad", () => {
        const nuevoValor = 7
        const nuevoProdcuto = changeCantidadProducto(nuevoValor)(producto1)
        expect(nuevoProdcuto.cantidad).toBe(nuevoValor)
    })

    it("sumInList", () => {
        const productoModificado = {...producto1, cantidad: 0}
        setCarritoData([productoModificado])
        const listaModificada = sumProducto(productoModificado)
        expect(listaModificada.pop().cantidad).toBe(1)
    })

    it("sumInList twice", () => {
        const producto = {...producto1, cantidad: 0}
        setCarritoData([producto])
        setCarritoData(sumProducto(producto))
        const lista2 = sumProducto(carritoData.pop())
        expect(lista2.pop().cantidad).toBe(2)
    })

})