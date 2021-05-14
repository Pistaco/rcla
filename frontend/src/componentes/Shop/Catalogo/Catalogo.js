import {useEffect, useState} from "react";

import djangoAPIHandler from "../../djangoAPIHandler";
import CatalogoJsx from "./CatalogoJsx";


const Catalogo = () => {
    const [lista, setLista] = useState([])

    const setListFromDjangoData = () => requestDataDjango()
        .then(setLista)
        .catch(console.log)
    
    const requestDataDjango = () => djangoAPIHandler.productos.allProductos()

    useEffect(setListFromDjangoData, [])

    return <CatalogoJsx first_row={lista.slice(0, 5)} secound_row={lista.slice(5, 10)}/>
}




export default Catalogo