import styled from 'styled-components';


export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  background: #000;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 80vh;
  max-height: 100%;
  padding: 0 2rem;
  /* width: 650px; */
  background: #fff;
  color: #000;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  box-shadow: 14px 12px 12px #363636;
  @media screen and (max-width: 650px) {
    width: 100%;
  }

  img {
      width: 5rem;
      border-radius: 50%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 13px 12px #e31837;
  letter-spacing: 8px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  background: #FFF;
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #CD5C5C;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;