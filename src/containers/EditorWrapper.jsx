import React from 'react'
import { MainContainer, Container1 } from './PageContainer.jsx'
import Navigation from './Navigation.jsx'
import {  useSelector, useDispatch } from 'react-redux'
import { showModal } from '../actions/index.js'
import { BurgerButton, DottedButton } from '../components/buttons.js'
import SideMenu from './SideMenu.jsx'
import styled from 'styled-components'
import cat from '../content/cat.jpg'
import Filter from '../components/Filter.jsx'

const EditingContainer = styled(Container1)`
  display: block;
  text-align: center;

  overflow: hidden;
  overflow-y: scroll;
`

const Editor = () => {
  const isModalOpened = useSelector(state => state.isModalOpened);
  const {isOpened, modalName} = isModalOpened
  const dispatch = useDispatch();

  return(
    <MainContainer>
    <div>
      <BurgerButton onClick = {e => {
        e.preventDefault();
        dispatch(showModal('navbar'))
      }}/>
      <DottedButton onClick = {e =>{
        e.preventDefault();
        dispatch(showModal('sideMenu'))
      }}/>
      <div>
        <img src = {`${cat}`} width = '100%' height = '100%' alt = 'cat'/>
      </div>
    </div>
    <EditingContainer>
      <Filter/>
      <Filter/>
      <Filter/>
      <Filter/>
      <Filter/>      <Filter/>
      <Filter/>
      <Filter/>
      <Filter/>

    </EditingContainer>
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
