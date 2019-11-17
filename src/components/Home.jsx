import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, reg } from '../actions/index.js'
import Modal from './Modal.jsx'
import { MainContainer, AuthContainer } from '../styles/containers.js'
import { AuthButton, RegButton } from '../styles/buttons.js'
import { Header1, Header2, Text } from '../styles/text.js'



const Home = () => {
  const authStatus = useSelector(state => state.authStatus);
  const dispatch = useDispatch();

  return(
    <MainContainer>
      {!authStatus
        &&
        <div>
          <section>
            <Header1>О приложении</Header1>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </section>
          <AuthContainer>
            <Header2>
              {authStatus === 'reg' ? 'Регистрация' : 'Авторизация'}
            </Header2>
            <div>
              <RegButton onClick = {() => {dispatch(reg())}}>Регистрация</RegButton>
              <AuthButton onClick = {() => {dispatch(login())}}>Вход в систему</AuthButton>
            </div>
          </AuthContainer>
        </div>
      }
      {authStatus
       &&
       <Modal/>
      }
    </MainContainer>
  )
}

export default Home
