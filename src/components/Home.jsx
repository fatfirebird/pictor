import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, reg } from '../actions/index.js'
import Modal from './Modal.jsx'

const Home = () => {
  const authStatus = useSelector(state => state.authStatus);
  const dispatch = useDispatch();

  return(
    <main>
      <section>
        <h2>О приложении</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
      {!authStatus
        &&
        <div>
          <button onClick = {() => {dispatch(reg())}}>Регистрация</button>
          <button onClick = {() => {dispatch(login())}}>Авторизация</button>
        </div>
      }
      {authStatus
       &&
       <Modal/>
      }
    </main>
  )
}

export default Home
