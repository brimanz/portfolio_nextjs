import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Jonathan Briceño<br />
        Frontend and React Developer.
      </SectionTitle>

      <SectionText>
        Creativity and passion for development.
      </SectionText>

      <Button onClick={() => window.location="https://www.linkedin.com/in/brimanz-frontend/"}>
        More about
      </Button>

    </LeftSection>
  </Section>
);

export default Hero;