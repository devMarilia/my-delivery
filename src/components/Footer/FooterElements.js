import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;


  img {
      width: 5rem;
      border-radius: 50%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-bottom: 16px;
`;
export const SidebarMenu = styled.div`
  display: flex;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  justify-content: space-between;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
export const SidebarLink = styled.a`
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;