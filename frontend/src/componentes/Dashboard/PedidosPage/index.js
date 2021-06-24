import {useEffect, useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";
import Table from "./table";
import SearchBox from "../ProductosPage/search/search";

const PedidosPage = () => {
    const [lista, setLista] = useState([])

    const djangoRequest = () => djangoAPIHandler.pedidoProcess.allPedidos()

    const refresTable = () => {
        djangoRequest()
            .then(setLista)
            .catch()
    }

    useEffect(refresTable, [])


   return <>
       <Table
           lista={lista}
           refreshTable={refresTable}
       />
    </>
}

export default PedidosPage