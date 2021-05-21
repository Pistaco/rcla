import {useEffect, useState} from "react";
import {Route} from "react-router-dom";

import Page from "./Page";


const ListaDePages = ({setMax, lista}) =>  {

    const [listaProcesada, setListaProcesada] = useState([])

    const processDataForTheList = data => (value, index) => {
        if (valuateIndex(index)) {
            data.push(cutData(index))
        }
    }

    const cutData = index => lista.slice(index, index + 10)
    const valuateIndex = index => ( index % 10 ) === 0

    useEffect(() => {
        let data = []
        lista.forEach(processDataForTheList(data))
        setListaProcesada(data)
    }, [lista])

    useEffect(() => setMax(listaProcesada.length),[listaProcesada])

    return <>
        { listaProcesada.map((value, index) => <Route path={"/" + index}>
            <Page lista={value}/>
        </Route> )}
    </>
}

export default ListaDePages
