import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";
import imgDommy from "../../../static/dummy-chronograph-watch-500x500.jpg"

const Style = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr .2fr 1fr;
    margin: 0 2rem;
    width: 100vw;
    height: 50vw;
`

const Descripcion = styled.div`

`

const Titulo = styled.div`
    grid-column: 3 / 4;
    font-size: 1rem;
`
const Precio = styled.div``


const Img = styled.div`
    width: 100%;
    border: #171717 solid 1px;
    grid-row: 1 / span 2;
    align-self: center;
    justify-self: center;
`

const PageProducto = () => {
    const [data, setData] = useState({})
    let {id} = useParams()

    const handlerData = () => requestData()
        .then(setData)
        .catch(console.log)

    const requestData = () => djangoAPIHandler.productos.getById(id)

    useEffect(handlerData,[])

    return (
        <Style>
            <Img><img src={imgDommy} style={{width: "100%"}} alt=""/></Img>
            <Titulo>
                {data.nombre}
            </Titulo>
        </Style>
    )
}

const TextoZone = () => (
    <h1>q</h1>
)

export default PageProducto