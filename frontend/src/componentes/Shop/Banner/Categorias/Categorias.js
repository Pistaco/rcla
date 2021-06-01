import styled from "styled-components";
import Item from "./Item";
import { FlexRowSpacedEvenly} from "../../../reusable-styled/flexConteiners";
import {useEffect, useState} from "react";

const data = {
    "PC": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC1": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC2": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC3": ["GAMER", "NORMAL", "sss"],
    "PC4": []
}

const Categorias = () => {
    return <CategoriasJsx data={data}/>
}


const StyleCategoria = styled(FlexRowSpacedEvenly)`
    margin: 15px 0;
    height: 6rem;
    background-color: #F5AF46;
`


export const CategoriasJsx = ({data}) => {

    const mapData = () => maperObject(data, (key, value) => (
        <Item data={value}>{key}</Item>
    ))

    const maperObject = (object, funcion) => Object.entries(object).map(([key, value]) => funcion(key, value))

    return (
    <StyleCategoria>
        {mapData()}
    </StyleCategoria>
    )
}




export default Categorias