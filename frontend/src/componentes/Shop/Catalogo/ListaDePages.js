import {useEffect } from "react";
import {Route} from "react-router-dom";

import Page from "./Page";


const ListaDePages = ({lista, setListaProcesada, listaProcesada, path}) =>  {

    const ProcessList = () => lista.reduce(reducerForProcessList, [])

    const reducerForProcessList = (array, value, index) => valuateIndex(index) ?
        [...array, cutData(index)] : array

    const cutData = index => lista.slice(index, index + 10)
    const valuateIndex = index => ( index % 10 ) === 0

    useEffect(() => setListaProcesada(ProcessList()), [lista])

    return <>
        { listaProcesada.map((value, index) => (
            <Route path={`${path}/${index}`}>
                <Page lista={value}/>
            </Route>
        ))}
    </>
}

export default ListaDePages
