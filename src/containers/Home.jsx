import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { signin, reg, closeAuth, auth } from '../actions/index.js'
import { Container1, AuthContainer, TextContainer } from './PageContainer.jsx'
import { Form } from '../components/forms.js'
import { Button, CloseButton } from '../components/buttons.js'
import styled from 'styled-components'
import axios from 'axios'
import Cookies from 'js-cookie'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`

const ErrorBlock = styled.span`
  display: block;
  text-align: center;

  color: #bb1414;
`

const Home = () => {
  const authStatus = useSelector(state => state.authStatus);
  const dispatch = useDispatch();
  const user = {login: '', email: '', password: ''};
  const [userInfo, setUserInfo] = useState(user);
  const [errStatus, setError] = useState(null);

  const handleChange = event => {
    const { value, id } = event.target;

    return setUserInfo(state => ({
      ...state,
      [id]: value,
    }));
  }

  const handleError = res => {
    const { statusText } = res;
    return setError(statusText);
  }

  const handleSubmit = () => {
    const url = 'http://localhost:8000/';
    if (userInfo.hasOwnProperty('email') && userInfo.email !== '') return sendRequest(url + 'reg', userInfo);

    return sendRequest(url + 'log', userInfo)
  }

  const sendRequest = (url, data) => {
    return axios.post(url, data)
    .then(res => {
      const { login, password } = data;
      if (res.data.hasOwnProperty('email')) {
         setUserInfo(state => ({
           email: '',
           login,
           password,
         }));
         dispatch(signin());
         return null
      }
      if (res.data.token) {
        Cookies.set('access', res.data.token);
        batch(() => {
          dispatch(auth());
          dispatch(closeAuth());
        });
      }
    })
    .catch(err => {
      handleError(err.response)
    })
  }

  useEffect(() => {
    const token = Cookies.get('access');
    if (token) dispatch(auth());
  })

  return(
    <Container1>
      {!authStatus
        &&
        <div>
          <TextContainer>
            <h1>О приложении</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </TextContainer>
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
          <Button type = 'login' onClick = {() => {dispatch(signin())}}>Вход в систему</Button>
        </ButtonContainer>
      </AuthContainer>
      :
      <AuthContainer>
        <h2>{authStatus === 'reg' ? 'Регистрация' : 'Авторизация'}</h2>
        {authStatus &&
         <Form onSubmit = {(e) => {
           e.preventDefault()
           setError(state => null);
           handleSubmit()
         }}>
         {errStatus &&
           <ErrorBlock>
             {errStatus}
           </ErrorBlock>
         }
             {authStatus === 'reg' &&
             <div>
               <label htmlFor = 'email'>E-mail</label>
               <input
                id = 'email'
                type = 'email'
                placeholder = 'Введите email'
                value = {userInfo.email}
                onChange = {handleChange}
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
                onChange = {handleChange}
                value = {userInfo.login}
                required
               />
             </div>
             <div>
               <label htmlFor = 'password'>Пароль</label>
               <input
                id = 'password'
                type = 'password'
                placeholder = 'Введите пароль'
                onChange = {handleChange}
                value = {userInfo.password}
                required
                />
             </div>
              <Button auth = {authStatus}>Отправить</Button>
              <CloseButton onClick = {e => {
                e.preventDefault();
                setError(state => null);
                setUserInfo(state => user);
                dispatch(closeAuth());
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
