import React from 'react'
import { MainContainer } from './PageContainer.jsx'
import Navigation from './Navigation.jsx'
import {  useSelector, useDispatch } from 'react-redux'
import { showModal } from '../actions/index.js'
import { BurgerButton } from '../components/buttons.js'

const Editor = () => {
  const modalName = useSelector(state => state.isModalOpened.modalName);
  const dispatch = useDispatch();

  return(
    <MainContainer>
    <BurgerButton onClick = {e => {
      e.preventDefault();
      dispatch(showModal('navbar'))
    }}/>
    {modalName === 'navbar' &&
    <Navigation/>
    }
    </MainContainer>
  )
}

export default Editor
