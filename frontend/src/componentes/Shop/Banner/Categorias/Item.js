import {useState} from "react";
import styled from "styled-components";
import {FlexCenter} from "../../../reusable-styled/flexConteiners";
import ItemDropList from "./ItemDrop";
import {ItemDrom} from "./ItemDrop";

const RelativeItem = styled.div`
  width: 100%;
  position: relative;
  &:hover  {
    background-color: #F5C646;
  }
`
const ItemStyle = styled(FlexCenter)`
    height: 100%;
    color: white;
    box-shadow: 1px 5px 5px #00000029;
  
    
`

const Item = props => {
    const [hover, setHover] = useState(false)
    return (
        <RelativeItem
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <ItemStyle
            >
                {props.children}
            </ItemStyle>
            {hover ? <ItemDropList data={props.data}/> : null}
        </RelativeItem>
    )
}

export default Item
