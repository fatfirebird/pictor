import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeAuth } from '../actions/index.js'

const AuthForm = () => {
  const authStatus = useSelector(state => state.authStatus);
  const dispatch = useDispatch();

  return(
    <div>
      {authStatus &&
       <div>
         <h3>{authStatus === 'reg' ? 'Регистрация' : 'Авторизация'}</h3>
         <form>
          {authStatus === 'reg' &&
          <label>
           E-mail
           <input type = 'email' placeholder = 'Введите email' required/>
          </label>
          }
           <label>
            Логин
            <input type = 'text' placeholder = 'Введите логин' required/>
           </label>
           <label>
            Пароль
            <input type = 'password' placeholder = 'Введите пароль' required/>
           </label>
           <button>Отправить</button>
           <button onClick = {e => {
             e.preventDefault()
             dispatch(closeAuth())
           }}>
              Закрыть окно
            </button>
         </form>
       </div>
      }
    </div>
  )
}

export default AuthForm
