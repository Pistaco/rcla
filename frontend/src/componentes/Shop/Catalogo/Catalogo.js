import {useEffect, useState} from "react";

import djangoAPIHandler from "../../djangoAPIHandler";

import ListaDePages from "./ListaDePages";
import Pagination from "./Pagination";


const Catalogo = () => {
    const [lista, setLista] = useState([])
    const [maxPages, setMax] = useState(0)
    const [numeroPagina, setNumeroPagina] = useState(0)


    const setListFromDjangoData = () => requestDataDjango()
        .then(setLista)
        .catch(console.log)

    const requestDataDjango = () => djangoAPIHandler.productos.allProductos()

    useEffect(setListFromDjangoData, [])

    return (
        <>
            <ListaDePages lista={lista}  setMax={setMax} setLista={setLista}/>
            <Pagination number={maxPages}/>
        </>
    )
}



export default Catalogo