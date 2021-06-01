import styled from "styled-components";

import Navbar from "./navbar";
import CarritoIcon from "./CarritoIcon";
import SearchForShop from "./SearchBox";

import Logo from "./styleMenu/Logo";
import Eslogan from "./styleMenu/Eslogan";
import GreenBar from "./styleMenu/GreenBar";

const StyledMenu = styled.div`
  display: grid;
  grid-template-rows:  .5fr 1fr .3fr;
  grid-template-columns: 1fr 2fr .5fr;
  
  margin-top: 25px;
  height: 300px;
  background-color: white;
  
  @media (max-width: 800px) {
    height: 150px;
  }
`



const Menu = () => <StyledMenu>
    <Navbar/>
    <CarritoIcon/>
    <SearchForShop/>
    <Logo/>
    <GreenBar/>
    <Eslogan/>
</StyledMenu>

export default Menu