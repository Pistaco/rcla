import {useState} from "react";
import styled from "styled-components";
import {FlexCenter} from "../../../reusable-styled/flexConteiners";
import ItemDropList from "./ItemDrop";

const RelativeItem = styled.div`
    width: 100%;
    position: relative;
`
const ItemStyle = styled(FlexCenter)`
    height: 100%;
    color: white;
    box-shadow: 1px 5px 5px #00000029;
    &:hover {
      background-color: #F5C646;
    }
`

const Item = props => {
    const [hover, setHover] = useState(false)
    return (
        <RelativeItem>
            <ItemStyle onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {props.children}
            </ItemStyle>
                { hover ? <ItemDropList data={props.data}/> : null}
        </RelativeItem>
    )
}

export default Item
