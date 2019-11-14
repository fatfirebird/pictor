import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Editor from './Editor.jsx'
import Home from './Home.jsx'
import Auth from './Auth.jsx'
import User from './User.jsx'
import NoPath from './NoPath.jsx'
import { useSelector } from 'react-redux'

export default function App(){
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  return(
    <BrowserRouter>
        {isLoggedIn
          ?
          <Switch>
            <Route exact path = '/editor' component = {Editor}/>
            <Redirect to = '/editor'/>
          </Switch>
          :
          <Switch>
            <Route exact path = '/authorization' component = {Auth}/>
            <Redirect to = '/authorization'/>
          </Switch>
        }
    </BrowserRouter>
  )
}
