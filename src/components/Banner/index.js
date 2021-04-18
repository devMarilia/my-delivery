import React from 'react';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from '../Banner/BannerElements';
import logo from '../../images/logo.jpeg'
import { Link } from "react-router-dom";

function Banner() { 

  return (
    <HeroContainer>
     <HeroContent>
        <HeroItems>
          <img src={logo} alt="garçonete"/> 
          <HeroH1>O melhor delivery</HeroH1>
          <HeroP>Pronta em 30 minutos</HeroP>
          <Link to='/Pedido'>
          <HeroBtn>Faça seu pedido</HeroBtn>
          </Link>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Banner;