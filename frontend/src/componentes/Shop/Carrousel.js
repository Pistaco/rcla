import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"
import dommy from "../../static/img.png"
import styled from "styled-components";

const Style = styled.div`
    width: 60%;
    margin: auto;
`


const Carrousel = () => (
    <Style>
    <Carousel>
            <div>
                <img src={dommy} alt="slide1"/>
            </div>

            <div>
                <img src={dommy} alt="slide1"/>
            </div>

            <div>
                <img src={dommy} alt="slide1"/>
            </div>
    </Carousel>
        </Style>
)
export default Carrousel