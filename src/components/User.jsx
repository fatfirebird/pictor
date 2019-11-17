import React from 'react'
import styled from 'styled-components'

const Login = styled.span`
  color: red;
  padding: 5px;
  font-sise: 15px;
`

const User = () => {
  return(
    <div>
      <img alt='аватар'/>
      <p>
        <Login>ffb</Login>
      </p>
    </div>
  )
}

export default User
