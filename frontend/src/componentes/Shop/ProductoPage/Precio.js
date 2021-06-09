import styled from "styled-components";

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

export default props => (
    <Precio>
        Precio: <br/> <span>${props.children}</span>
    </Precio>
)
