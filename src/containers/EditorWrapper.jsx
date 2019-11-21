import React from 'react'
import { MainContainer, Container1 } from './PageContainer.jsx'
import Navigation from './Navigation.jsx'
import {  useSelector, useDispatch } from 'react-redux'
import { showModal } from '../actions/index.js'
import { BurgerButton, DottedButton } from '../components/buttons.js'
import SideMenu from './SideMenu.jsx'
import styled from 'styled-components'
import Filters from './Filters.jsx'
import ImageContainer from './ImageContainer.jsx'
import Preset from '../components/Preset.jsx'

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
    <BurgerButton onClick = {e => {
      e.preventDefault();
      dispatch(showModal('navbar'))
    }}/>
    <DottedButton onClick = {e =>{
      e.preventDefault();
      dispatch(showModal('sideMenu'))
    }}/>
    <ImageContainer/>
    <EditingContainer>
      <Preset/>
      <Filters/>
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
