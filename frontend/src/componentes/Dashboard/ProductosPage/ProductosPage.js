import Table from "./table"
import SearchBox from "./search/search";
import {useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";

export const GeneralPage = ({requestApi, lista, SetLista}) => {
    return(
        <>
            <SearchBox requestApi={requestApi}  setLista={SetLista} />
            <Table  lista={lista} SetLista={SetLista}/>
        </>
    )
}

const ProductosPage = () => {
    const [lista, SetLista] = useState([])
    const requestApi = () => djangoAPIHandler.productos.allProductos().then(SetLista)
    return <GeneralPage
        lista={lista}
        SetLista={SetLista}
        requestApi={requestApi}
    />
}

export default ProductosPage
