import React from 'react'
import Wrapper from './Wrapper'
// import SubTitle from './SubTitle'
import Links from './Links'
import Footer from './Footer'
import poopcode from "./POOPCODE.png";
import Image from './Image'

export default () => (
  <Wrapper>
    <a href="https://poopcode.com"><Image src={poopcode} alt="Poopcode.com"/></a>
    <Footer>
      <Links>
        <li>
          <a href='//github.com/dedrevil/jsonbeautifier'>Source code</a>
        </li>
        <li>
          <a href='///github.com/Secretmapper/jsonviewer'>Forked from </a>
        </li>
        <li>
          <a href='//github.com/dedrevil/jsonbeautifier/issues'>Report issues</a>
        </li>
      </Links>
      Made by <a href='https://twitter.com/poopcoder'>@Poopcode</a>
    </Footer>
  </Wrapper>
)
