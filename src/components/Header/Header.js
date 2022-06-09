import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFile } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    
    {/*navigation*/}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    {/*social icons*/}
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/brimanz-frontend/" title="Linkedin">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/brimanz" title="Github">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
