import styled from "styled-components";
import {useContext} from "react";

import {FlexCenter} from "../../reusable-styled/flexConteiners";
import {ContextMethods} from "../Carrito";
import CarritoBtnFuncional from "../Carrito/CarritoBtnFuncional";


const StyleB = styled(FlexCenter)`
  button {
    width: 150px;
    height: 150px;
  }
`

const CarritoForProducto = ({data}) => (
    <StyleB>
        <CarritoBtnFuncional data={data}/>
    </StyleB>
)

export default CarritoForProducto


