import React from 'react'
import styled from 'styled-components'
import User from  './User.jsx'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 100vh;
`

const Navigation = () => {
  return(
    <Nav>
      <User />
      <ul>
        <li>
        1
        </li>
        <li>
        2
        </li>
        <li>
        3
        </li>
      </ul>
    </Nav>
  )
}

export default Navigation
