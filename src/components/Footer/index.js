import React from 'react';
import {
  FaInstagram,
   FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaMailBulk
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  SidebarMenu,
  SidebarLink
} from './FooterElements';

import logo from '../../images/logo.jpeg'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'> 
              <img src={logo} alt="garçonete"/>        
                      MyDelivery                
            </SocialLogo>           
           
            <SidebarMenu>
              <Link to='/'>
                <SidebarLink>Home</SidebarLink>
                </Link>
                <Link to='/Cardapio'>
                <SidebarLink >Cardápio</SidebarLink>
                </Link>
                <Link to='/Cadastro'>
                <SidebarLink >Cadastro</SidebarLink>
                </Link>
            </SidebarMenu>
            <SocialIcons>
            <SocialIconLink href='https://web.whatsapp.com/' target='_blank' aria-label='WhatsApp'>
                <FaWhatsapp />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/marilia_leemos/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/devMarilia' target='_blank' aria-label='Github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://mail.google.com/mail/u/0/#inbox'
                target='_blank'
                aria-label='Gmail'
                rel='noopener noreferrer'
              >
                <FaMailBulk/>
              </SocialIconLink>
              
              <SocialIconLink href='https://www.linkedin.com/in/mar%C3%ADlia-lemos-b2565316a/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;