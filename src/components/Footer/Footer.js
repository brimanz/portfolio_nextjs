import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Creativity and passion for development.</Slogan>
        </CompanyContainer>

        <SocialIcons href="https://www.linkedin.com/in/brimanz-frontend/" title="Linkedin">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://github.com/brimanz" title="Github">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
