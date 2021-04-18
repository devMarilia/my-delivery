import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './InterativeElements';
import pizza1 from '../../images/pizza1.jpg'
import pizza2 from '../../images/pizza2.jpeg'
import lanche1 from '../../images/lanche1.jpeg'
import lanche2 from '../../images/lanche2.jpg'
import batata1 from '../../images/batata1.jpeg'
import batata2 from '../../images/batata2.jpeg'

function Interactive () {
  return (
    <ProductsContainer>
      <ProductsHeading>Faça seu pedido</ProductsHeading>
      <ProductWrapper>
            <ProductCard>
              <ProductImg src={pizza1}/>
              <ProductInfo>
                <ProductTitle>Pizza Mexicana</ProductTitle>
                <ProductDesc>Gourmet</ProductDesc>
                <ProductPrice>59,90</ProductPrice>
                <ProductButton>Comprar</ProductButton>
              </ProductInfo>
            </ProductCard>        
            <ProductCard>
              <ProductImg src={pizza2}/>
              <ProductInfo>
                <ProductTitle>Pizza Siciliana</ProductTitle>
                <ProductDesc>Tradicional</ProductDesc>
                <ProductPrice>45,90</ProductPrice>
                <ProductButton>Comprar</ProductButton>
              </ProductInfo>
            </ProductCard>
  </ProductWrapper>
  <ProductWrapper>
            <ProductCard>
              <ProductImg src={lanche1}/>
              <ProductInfo>
                <ProductTitle>Hamburgão</ProductTitle>
                <ProductDesc>Artesanal</ProductDesc>
                <ProductPrice>29,00</ProductPrice>
                <ProductButton>Comprar</ProductButton>
              </ProductInfo>
            </ProductCard>        
            <ProductCard>
              <ProductImg src={lanche2}/>
              <ProductInfo>
                <ProductTitle>Super Baicon</ProductTitle>
                <ProductDesc>Tradicional</ProductDesc>
                <ProductPrice>24,50</ProductPrice>
                <ProductButton>Comprar</ProductButton>
              </ProductInfo>
            </ProductCard>
  </ProductWrapper>
  <ProductWrapper>
            <ProductCard>
              <ProductImg src={batata1}/>
              <ProductInfo>
                <ProductTitle>Bacon</ProductTitle>
                <ProductDesc>Tradicional</ProductDesc>
                <ProductPrice>25,90</ProductPrice>
                <ProductButton>Comprar</ProductButton>
              </ProductInfo>
            </ProductCard>        
            <ProductCard>
              <ProductImg src={batata2}/>
              <ProductInfo>
                <ProductTitle>Creme</ProductTitle>
                <ProductDesc>Artesanal</ProductDesc>
                <ProductPrice>23,20</ProductPrice>
                <ProductButton>Comprar</ProductButton>
              </ProductInfo>
            </ProductCard>
  </ProductWrapper>
    </ProductsContainer>
  );
};

export default Interactive;