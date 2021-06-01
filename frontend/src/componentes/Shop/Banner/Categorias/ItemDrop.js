import styled from "styled-components";
import {FlexColumnCenter} from "../../../reusable-styled/flexConteiners";
import {Link} from "react-router-dom";

const ItemDrom = styled(FlexColumnCenter)`
    position: absolute;
    width: 100%;
    z-index: 1;
    border-radius: 0 0 2rem 2rem;
    background-color: #F5C646;
    
    @media (max-width: 800px) {
      font-size: .8rem;
    }
`

const ItemPoint = styled.li`
    margin: 10px;
    color: white;
    
    &:hover {
      background-color: #F5AF46;
    }
`

const ItemDropList = ({data}) => (
    <ItemDrom>
        { data.map(value => (
            <Link to={`/Catalogo/${value}/0`} style={{textDecoration: "none"}}><ItemPoint>{value}</ItemPoint></Link>
        ))}
    </ItemDrom>
)

export default ItemDropList



