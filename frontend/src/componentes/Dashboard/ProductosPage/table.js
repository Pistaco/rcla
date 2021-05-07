import {useEffect, useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";
import TablaJsx from "./tableJsx";


const Table = ({lista, SetLista, requestApi}) => {


    const onDelete = id => {
        const deleteFromList = () => SetLista(lista.filter(value => value.id !== id))
        const deleteFromBackEnd = () => djangoAPIHandler.productos.deleteProducto(id)
        deleteFromList()
        deleteFromBackEnd()
    }

    useEffect(requestApi, [])

    return (
        <TablaJsx
            lista={lista}
            onDelete={onDelete}
        />
    )

}

export default Table