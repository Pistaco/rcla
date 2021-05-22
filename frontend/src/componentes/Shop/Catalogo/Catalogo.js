import {useEffect, useState} from "react";

import djangoAPIHandler from "../../djangoAPIHandler";

import ListaDePages from "./ListaDePages";
import Pagination from "./Pagination";


const Catalogo = () => {
    const [lista, setLista] = useState([])
    const [listaProcesada, setListaProcesada] = useState([])
    const [maxPages, setMax] = useState(0)

    const setListFromDjangoData = () => requestDataDjango()
        .then(setLista)
        .catch(console.log)

    const setMaxPagesEffect = () => setMax(listaProcesada.length)
    const requestDataDjango = () => djangoAPIHandler.productos.allProductos()

    useEffect(setListFromDjangoData, [])
    useEffect(setMaxPagesEffect, [listaProcesada])

    return (
        <>
            <ListaDePages
                path="/Catalogo"
                lista={lista}
                listaProcesada={listaProcesada}
                setListaProcesada={setListaProcesada}/>

            <Pagination
                path="/Catalogo"
                number={maxPages}
            />
        </>
    )
}



export default Catalogo