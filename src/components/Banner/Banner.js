import React from 'react';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from '../Banner';

function Banner() { 

  return (
    <HeroContainer>
     <HeroContent>
        <HeroItems>
          <HeroH1>A melhor Pizza</HeroH1>
          <HeroP>Pronta em 30 minutos</HeroP>
          <HeroBtn>Faça seu pedido</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Banner;