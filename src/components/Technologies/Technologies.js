import React from 'react';
import { DiCodepen, DiReact, DiDatabase, DiHtml5DeviceAccess } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>

    <SectionTitle>Skills</SectionTitle>

    <SectionText>
      I work as a web developer using some tools such as:
    </SectionText>

    <List>
      <ListItem>
        <ListContainer>
          <DiReact size="4rem"/>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Solid experience with: <br/>
            React, Javascript, Bootstrap
          </ListParagraph>          
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <DiCodepen size="4rem"/>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Solid experience with: <br/>
            Solidity, Truffle, Hardhat
          </ListParagraph>          
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <DiDatabase size="4rem"/>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Some experience with: <br/>
            Node, Express, Python
          </ListParagraph>          
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <DiHtml5DeviceAccess size="4rem" />
          <ListTitle>UX-Design</ListTitle>
          <ListParagraph>
            Solid experience with: <br/>
            Figma
          </ListParagraph>          
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
