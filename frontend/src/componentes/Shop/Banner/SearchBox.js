import Search from "../../Dashboard/ProductosPage/search/search";
import styled from "styled-components";

const SearchStyle = styled.div`
    grid-column: 2 / 3;
    grid-row:  2 / span 1;
    align-self: center;
`
const SearchForShop = () => (
    <SearchStyle>
        <Search setLista={() => {}} requestApi={() => {}}/>
    </SearchStyle>
)

export default SearchForShop