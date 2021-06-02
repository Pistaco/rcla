import CarritoStep from "../Carrito/CarritoStep";
import styled from "styled-components";

const Style = styled.div`
`

const PagesStep = ({step}) => {
    switch (step){
        case 1:
            return <CarritoStep/>
        case 2:
            return "2"
        case 3:
            return "3"
        case 4:
            return "4"
    }
}

export default ({step}) => <PagesStep step={step}/>