import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../actions/index.js'

const AuthForm = () => {
  const authStatus = useSelector(state => state.authStatus);

  const dispatch = useDispatch()

  return(
    <div>
      {authStatus &&
       <div>
         <h3>{authStatus}</h3>
         <form>
           <label>
             E-mail
             <input type = 'email' placeholder = 'Введите email' required/>
           </label>
           <label>
             Пароль
             <input type = 'password' placeholder = 'Введите пароль' required/>
           </label>
           <button>Отправить</button>
           <button onClick = {() => {dispatch(closeModal())}}>Закрыть окно</button>
         </form>
       </div>
      }
    </div>
  )
}

export default AuthForm
