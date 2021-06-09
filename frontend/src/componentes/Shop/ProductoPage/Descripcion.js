import styled from "styled-components";

const font = `
    font-family: coolvetica, serif;
    font-weight: bolder;
`

const StyleDescripcion = styled.div`
    grid-column: 3 / 4;
    ${font};
    font-size: 1.3rem;
    
    @media (max-width: 800px) {
      grid-column: auto / auto;
    }
`

const TituloDescripcion = styled.h1`
    ${font};
`

const Descripcion = props => (
    <StyleDescripcion>
        <TituloDescripcion>Descripcion:</TituloDescripcion>
        {props.children}
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </StyleDescripcion>
)

export default Descripcion