import styled from "styled-components";
import {green} from "../../reusable-styled/colors";
import Navbar from "./navbar";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import {FlexCenter} from "../../reusable-styled/flexConteiners";

const StyledMenu = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-rows:  .5fr 1fr .3fr;
  grid-template-columns: 1fr 2fr .5fr;
  height: 30vh;
  background-color: white;
`

const GreenBar = styled.div`
    background-color: ${green};
    grid-row: -2 / -1;
    grid-column: 1 / -1;
`

const Eslogan = styled.p`
    font-size: 1em;
    color: white;
    align-self: flex-end;
    grid-column: 2 / 3;
    grid-row: -2 / -1;
`

const SearchStyle = styled(FlexCenter)`
    grid-column: 2 / 3;
    grid-row:  2 / span 1;
`

const Menu = () => <StyledMenu>
    <Navbar/>
    <Logo>
        <p>Logo</p>
    </Logo>
    <SearchStyle>
        <SearchBox/>
    </SearchStyle>
    <GreenBar/>
    <Eslogan>
        Eslogan
    </Eslogan>
</StyledMenu>

export default Menu