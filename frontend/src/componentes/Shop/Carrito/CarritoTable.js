import styled from "styled-components";

import {shape} from "./shapeStyle";
import {FlexColumn} from "../../reusable-styled/flexConteiners";
import {Row, RowPrincipal} from "./Row";

const Style = styled(shape)`
    padding: 20px 30px;
`

export const CarritoTable = ({data}) => (
    <Style>
        <FlexColumn>
            <RowPrincipal/>
            {data.map(value => <Row data={value}/>) }
        </FlexColumn>
    </Style>
)


export default CarritoTable

