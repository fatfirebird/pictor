import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signin, reg, auth } from '../actions/index.js'
import { Container1 } from './PageContainer.jsx'
import { About } from '../components/about.jsx'
import { Authorization } from '../components/authorization.jsx'
import { AuthForm } from './AuthForm.jsx'
import { Loader } from '../components/loader.jsx'

import Cookies from 'js-cookie'

const Home = () => {
  const authStatus = useSelector(state => state.authStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('access');
    if (token) dispatch(auth());
  }, [dispatch])

  const registration = () => {
    dispatch(reg());
  }

  const authorization = () => {
    dispatch(signin());
  }

  return(
    <Container1>
      {
        !authStatus
        &&
        <About/>
      }
      <div>
        {
          authStatus === 'loading'
          ?
          <Loader />
          :
          <React.Fragment>
            {
              !authStatus
              ?
              <Authorization
                authStatus = {authStatus}
                registration = {registration}
                authorization = {authorization}
              />
              :
              <AuthForm authStatus = {authStatus} />
            }
          </React.Fragment>
        }
      </div>
    </Container1>
  )
}

export default Home
