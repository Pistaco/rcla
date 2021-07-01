import {useEffect, useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";
import Table from "./table";
import SearchBox from "../ProductosPage/search/search";

const PedidosPage = () => {
    const [lista, setLista] = useState([])

    const djangoRequest = () => djangoAPIHandler.pedidoProcess.allPedidos()
    const djangoSearch = input => djangoAPIHandler.pedidoProcess.search(input)


    return <>
        <SearchBox funcionAlldjango={djangoRequest} setLista={setLista} funcionOfDjango={djangoSearch}/>
        <Table lista={lista}/>
    </>
}

export default PedidosPage