import styled from "styled-components";

const StyleImg = styled.div`
    border: #171717 solid 1px;
    grid-row: 1 / -1;
    grid-column: 1 / 2;
    width: 40vw;
    align-self: center;
    justify-self: center;
    
    @media (max-width: 800px) {
      grid-row: 1 / span 1;
      width: 90%;
    }
`

const Img = ({image}) => <StyleImg><img src={image} style={{width: "100%", height: "100%"}} alt=""/></StyleImg>

export default Img