import styled from "styled-components";
import {FlexCenter, FlexColumnCenter, FlexRowSpacedEvenly} from "../../reusable-styled/flexConteiners";
import {useEffect, useState} from "react";

const data = {
    "PC": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC1": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC2": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC3": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC4": ["GAMER", "NORMAL", "NUCLEAR"],
}

const Categorias = () => {
    return <CategoriasJsx/>
}

const Nav = styled(FlexRowSpacedEvenly)`
    margin: 15px 0;
    height: 6rem;
    background-color: #F5AF46;
`

const ItemStyle = styled(FlexCenter)`
    position: relative;
    width: 100%;
    color: white;
    box-shadow: 1px 5px 5px #00000029;
    &:hover {
      background-color: #F5C646;
    }
`

const ItemDrom = styled(FlexColumnCenter)`
    width: 100%;
    position: absolute;
    top: 90px;
    border-radius: 0 0 30px 30px;
    background-color: #F5C646;
`

const ItemPoint = styled.li`
    margin: 10px;
`

const ItemDropList = () => (
    <ItemDrom>
        <ItemPoint>A</ItemPoint>
        <ItemPoint>A</ItemPoint>
        <ItemPoint>A</ItemPoint>
        <ItemPoint>A</ItemPoint>
    </ItemDrom>
)



const Item = props => {
    const [hover, setHover] = useState(false)
    return (
        <ItemStyle onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {props.children}
            { hover ? <ItemDropList/> : null}
        </ItemStyle>
   )
}


export const CategoriasJsx = ({data}) => <Nav>
    <Item>Calogo A</Item>
    <Item>Catalogo B</Item>
    <Item>Catalogo C</Item>
    <Item>Catalog D</Item>
    <Item>Catalogo E</Item>
</Nav>




export default Categorias