import {useEffect, useState} from "react";
import {useRouteMatch} from "react-router-dom";
import MensajeError from "./MensajeError";
import ListaDePages from "./ListaDePages";
import Pagination from "./Pagination";

const CatalogoGeneral = ({requestDataDjango, depends}) => {
    const [lista, setLista] = useState([])
    const [listaProcesada, setListaProcesada] = useState([])
    const [maxPages, setMax] = useState(0)

    let {url} = useRouteMatch()
    const setListFromDjangoData = () => requestDataDjango()
        .then(setLista)
        .catch(console.log)

    const setMaxPagesEffect = () => setMax(listaProcesada.length)
    useEffect(setListFromDjangoData, depends)
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

export default CatalogoGeneral