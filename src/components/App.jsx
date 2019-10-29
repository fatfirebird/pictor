import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Editor from './Editor.jsx'
import Home from './Home.jsx'
import Auth from './Auth.jsx'
import User from './User.jsx'
import NoPath from './NoPath.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {Editor}/>
        <Route exact path = '/home' component = {Home}/>
        <Route exact path = '/authorization' component = {Auth}/>
        <Route exact path = '/user' component = {User} />
        <Route component = {NoPath} />
      </Switch>
    </BrowserRouter>
  )
}
