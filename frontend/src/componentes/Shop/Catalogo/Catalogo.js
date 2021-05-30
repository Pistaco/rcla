import {useEffect, useState} from "react";

import djangoAPIHandler from "../../djangoAPIHandler";

import ListaDePages from "./ListaDePages";
import Pagination from "./Pagination";
import MensajeError from "./MensajeError";


const Catalogo = ({requestDataDjango}) => {
    const [lista, setLista] = useState([])
    const [listaProcesada, setListaProcesada] = useState([])
    const [maxPages, setMax] = useState(0)

    const setListFromDjangoData = () => requestDataDjango()
        .then(setLista)
        .catch(console.log)

    const setMaxPagesEffect = () => setMax(listaProcesada.length)

    useEffect(setListFromDjangoData, [])
    useEffect(setMaxPagesEffect, [listaProcesada])

    return (
        <>
            {lista.length ? null : <h1>
                <MensajeError/>
            </h1>}
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