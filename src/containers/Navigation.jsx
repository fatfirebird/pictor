import React from 'react'
import styled from 'styled-components'
import User from  '../components/User.jsx'
import { Link } from '../components/Link.jsx'
import { ArrowButton } from '../components/buttons.js'
import { fadeOutLeft, fadeInLeft, Animation } from '../styles/animations.js'

const Navbar = styled(Animation)`
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: #fff;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 40px 0 0 25px;
  }
`

const Navigation = () => {
  let online = true;

  return(
    <Navbar animation = {fadeOutLeft} delay = '3s'>
      <User />
      <ul>
        <li>
          <Link icon="filledImg">Редактировать изображение</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link icon="question">Справка</Link>
        </li>
        <li>
          <Link icon="exit">Выход</Link>
        </li>
      </ul>
      <ArrowButton onClick={e => {
        e.preventDefault();
      }}/>
    </Navbar>
  )
}

export default Navigation
