import React from "react";
import { Image } from "react-native";
import { Container } from "./styles";

import logo2 from '../../assets/logo2.png';

const Header = () => {
    return(
        <Container>
            <Image source = {logo2}/>
        </Container>
    )
}

export default Header;
