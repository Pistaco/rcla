import {useEffect, useState} from "react";
import {useParams, useRouteMatch} from "react-router-dom";

import djangoAPIHandler from "../../djangoAPIHandler";

import ListaDePages from "./ListaDePages";
import Pagination from "./Pagination";
import MensajeError from "./MensajeError";


const Catalogo = () => {
    const [lista, setLista] = useState([])
    const [listaProcesada, setListaProcesada] = useState([])
    const [maxPages, setMax] = useState(0)

    let {categoria} = useParams()
    let {url} = useRouteMatch()

    const requestDataDjango = () => djangoAPIHandler.categorias.getProductosByCategoria(categoria)

    const setListFromDjangoData = () => requestDataDjango()
        .then(setLista)
        .catch(console.log)

    const setMaxPagesEffect = () => setMax(listaProcesada.length)

    useEffect(() => console.log(lista), [])
    useEffect(setListFromDjangoData, [listaProcesada])
    useEffect(setMaxPagesEffect, [listaProcesada])

    return (
        <>
            {lista.length ? null :
                <MensajeError/>
            }
            <ListaDePages
                path={url}
                lista={lista}
                listaProcesada={listaProcesada}
                setListaProcesada={setListaProcesada}/>

            <Pagination
                path={url}
                number={maxPages}
            />
        </>
    )
}



export default Catalogo