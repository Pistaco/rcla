import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";
import imgDommy from "../../../static/dummy-chronograph-watch-500x500.jpg"
import CarritoBtn from "../Producto/CarritoBtn";
import {FlexCenter} from "../../reusable-styled/flexConteiners";

const Style = styled.div`
    display: grid;
    grid-template-rows: .3fr 1fr;
    grid-template-columns: 1fr .2fr 1fr;
    margin: 5rem 2rem;
    height: 80vh;
`

const TextZoneBottom = styled.div`
    grid-column: 3/ 4;
    font-size: 1.5rem;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
  
    h1 {
      margin-bottom: 30px;
      font-size: 4rem;
    }
`

const Titulo = styled.div`
    grid-column: 3 / 4;
    font-size: 8rem;
    margin-top: 20px;
`
const Precio = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 20px;
  
    span {
      font-size: 4rem;
      font-weight: lighter;
      color: #707070;
    }
`


const Img = styled.div`
    border: #171717 solid 1px;
    grid-row: 1 / span 2;
    width: 40vw;
    align-self: center;
    justify-self: center;
`


const Descripcion = styled.div`
    grid-column: 1 / 3;
`

const StyleB = styled(FlexCenter)`
    button {
      align-self: center;
      width: 150px;
      height: 150px;
    }
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
            <Img><img src={imgDommy} style={{width: "100%", height: "100%"}} alt=""/></Img>
            <TextoZone data={data}>
            </TextoZone>
        </Style>
    )
}

const TextoZone = ({data}) => (
    <>
        <Titulo>
            <p>
                {data.nombre} Producto
            </p>
        </Titulo>
        <TextZoneBottom>
            <Descripcion>

                <h1>Descripcion:</h1>
                {data.descripcion}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </Descripcion>
            <Precio>
                Precio: <br/> <span>${data.precio}</span>
            </Precio>
            <StyleB>
                <CarritoBtn onClick={() => {}}/>
            </StyleB>
        </TextZoneBottom>

    </>
)

export default PageProducto