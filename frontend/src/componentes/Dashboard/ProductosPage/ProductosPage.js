import Table from "./table"
import SearchBox from "./search/search";
import {useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";


const ProductosPage = () => {
    const [lista, SetLista] = useState([])
    const requestApi = input => djangoAPIHandler.productos.searchProducto(input)
    const funcionAllDjango = () => djangoAPIHandler.productos.allProductos()
    return <>
        <SearchBox funcionOfDjango={requestApi} setLista={SetLista} funcionAlldjango={funcionAllDjango}/>
        <Table lista={lista} SetLista={SetLista}/>
    </>
}

export default ProductosPage
