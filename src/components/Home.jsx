import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, reg } from '../actions/index.js'
import AuthForm from './AuthForm.jsx'
import Style from '../styles/index.js'

const Home = () => {
  const {Containers, Buttons, Content} = Style;

  const authStatus = useSelector(state => state.authStatus);
  const dispatch = useDispatch();

  return(
    <Containers.MainContainer>
      {!authStatus
        &&
        <div>
          <section>
            <Content.Header1>О приложении</Content.Header1>
            <Content.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Content.Text>
          </section>
          <Containers.AuthContainer>
            <Content.Header2>
              {authStatus === 'reg' ? 'Регистрация' : 'Авторизация'}
            </Content.Header2>
            <div>
              <Buttons.RegButton onClick = {() => {dispatch(reg())}}>Регистрация</Buttons.RegButton>
              <Buttons.AuthButton onClick = {() => {dispatch(login())}}>Вход в систему</Buttons.AuthButton>
            </div>
          </Containers.AuthContainer>
        </div>
      }
      {authStatus
       &&
       <AuthForm/>
      }
    </Containers.MainContainer>
  )
}

export default Home
