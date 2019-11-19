import React from 'react'
import { MainContainer } from './PageContainer.jsx'
import Navigation from './Navigation.jsx'
import {  useSelector, useDispatch } from 'react-redux'
import { showModal } from '../actions/index.js'
import { BurgerButton, DottedButton } from '../components/buttons.js'
import SideMenu from './SideMenu.jsx'

const Editor = () => {
  const isModalOpened = useSelector(state => state.isModalOpened);
  const {isOpened, modalName} = isModalOpened
  const dispatch = useDispatch();

  return(
    <MainContainer>
      <BurgerButton onClick = {e => {
        e.preventDefault();
        dispatch(showModal('navbar'))
      }}/>

      <DottedButton onClick = {e =>{
        e.preventDefault();
        dispatch(showModal('sideMenu'))
      }}/>
    {modalName === 'navbar' &&
      <Navigation/>
    }
    {modalName === 'sideMenu' && isOpened &&
      <SideMenu/>
    }
    </MainContainer>
  )
}

export default Editor
