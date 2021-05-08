import Table from "./table"
import SearchBox from "./search/search";
import {useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";

const ProductosPage = () => {
    const [lista, SetLista] = useState([])
    const requestApi = () => djangoAPIHandler.productos.allProductos().then(SetLista)

    return(
        <>
            <SearchBox requestApi={requestApi}  setLista={SetLista} />
            <Table  lista={lista} SetLista={SetLista}/>
        </>
    )
}

export default ProductosPage
