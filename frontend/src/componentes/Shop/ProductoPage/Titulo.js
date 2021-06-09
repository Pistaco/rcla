import styled from "styled-components";

const Style = styled.div`
    grid-column: 3 / 4;
    font-family: The-next-font, sans-serif;   
    font-weight: bold;
    font-size: 8rem;
    line-height: 110%;
    
    @media (max-width: 800px) {
      grid-row: 2 / 3;
      grid-column: auto / auto;
    }
`

const Titulo = props => (
    <Style>
        {props.children} X GAMING
    </Style>
)

export default Titulo

