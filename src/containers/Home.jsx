import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, reg, closeAuth } from '../actions/index.js'
import { Container1, AuthContainer } from './PageContainer.jsx'
import { Form } from '../components/forms.js'
import { Button, CloseButton } from '../components/buttons.js'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`
const Home = () => {
  const authStatus = useSelector(state => state.authStatus);
  const dispatch = useDispatch()

  const [userInfo, setUserInfo] = useState({
    email: null,
    login: null,
    password: null
  });

  const handleChange = target => {
    const { value, id } = target;

    return setUserInfo(state => ({
      ...state,
      [id]: value,
    }));
  }

  const handleSubmit = () => {
    const url = 'http://localhost:8000/users';
    const {email, login, password} = userInfo;
    console.log(userInfo);
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
  }

  return(
    <Container1>
      {!authStatus
        &&
        <div>
          <section>
            <h1>О приложении</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
        </div>
      }
      <div>
      {!authStatus
      ?
      <AuthContainer>
        <h2>
          {authStatus === 'reg' ? 'Регистрация' : 'Авторизация'}
        </h2>
        <ButtonContainer>
          <Button onClick = {() => {dispatch(reg())}}>Регистрация</Button>
          <Button type = 'login' onClick = {() => {dispatch(login())}}>Вход в систему</Button>
        </ButtonContainer>
      </AuthContainer>
      :
      <AuthContainer>
        <h2>{authStatus === 'reg' ? 'Регистрация' : 'Авторизация'}</h2>
        {authStatus &&
         <Form onSubmit = {(e) => {
           e.preventDefault()
           handleSubmit()
         }}>
             {authStatus === 'reg' &&
             <div>
               <label htmlFor = 'email'>E-mail</label>
               <input
                id = 'email'
                type = 'email'
                placeholder = 'Введите email'
                onChange = {e => handleChange(e.target)}
                required
               />
             </div>
             }
             <div>
               <label htmlFor = 'login'>Логин</label>
               <input
                id = 'login'
                type = 'text'
                placeholder = 'Введите логин'
                onChange = {e => handleChange(e.target)}
                required
               />
             </div>
             <div>
               <label htmlFor = 'password'>Пароль</label>
               <input
                id = 'password'
                type = 'password'
                placeholder = 'Введите пароль'
                required
                onChange = {e => handleChange(e.target)}
                />
             </div>
              <Button auth = {authStatus}>Отправить</Button>
              <CloseButton onClick = {e => {
                e.preventDefault();
                dispatch(closeAuth())
              }}/>
         </Form>
        }
      </AuthContainer>
      }
      </div>
    </Container1>
  )
}

export default Home
