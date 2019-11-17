import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeAuth } from '../actions/index.js'
import styled from 'styled-components'
import Style from '../styles/index.js'
import { Colors } from '../styles/constants'



const AuthForm = () => {
  const {Forms, Content, Buttons, Containers} = Style;
  const authStatus = useSelector(state => state.authStatus);
  const dispatch = useDispatch();

  const SubmitButton = styled(Buttons.RegButton)`
    width: 100%;
    max-width: none;

    margin-bottom: 20px;
    background-color: ${authStatus === 'reg' ? Colors.blue : Colors.purple};
  `

  return(
    <Containers.AuthContainer>
      <Content.Header2>{authStatus === 'reg' ? 'Регистрация' : 'Авторизация'}</Content.Header2>
      {authStatus &&
       <form>
           {authStatus === 'reg' &&
           <Forms.FormElement>
             <Forms.FormLabel htmlFor = 'email'>E-mail</Forms.FormLabel>
             <Forms.FormInput id = 'email' type = 'email' placeholder = 'Введите email' required/>
           </Forms.FormElement>
           }
           <Forms.FormElement>
             <Forms.FormLabel htmlFor = 'login'>Логин</Forms.FormLabel>
             <Forms.FormInput id = 'login' type = 'text' placeholder = 'Введите логин' required/>
           </Forms.FormElement>
           <Forms.FormElement>
             <Forms.FormLabel htmlFor = 'password'>Пароль</Forms.FormLabel>
             <Forms.FormInput id = 'password' type = 'password' placeholder = 'Введите пароль' required/>
           </Forms.FormElement>
            <SubmitButton>Отправить</SubmitButton>
            <Buttons.CloseButton onClick = {e => {
              e.preventDefault();
              dispatch(closeAuth())
            }}/>
       </form>
      }
    </Containers.AuthContainer>
  )
}

export default AuthForm
