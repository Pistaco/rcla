import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";
import ProductoPageStyle from "./ProductoPageStyle";


const PageProducto = () => {
    const [data, setData] = useState({})

    let {id} = useParams()
    const handlerData = () => requestData()
        .then(setData)
        .catch(console.log)

    const requestData = () => djangoAPIHandler.productos.getById(id)

    useEffect(handlerData,[])

    return <ProductoPageStyle data={data}/>
}


export default PageProducto