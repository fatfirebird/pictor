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

  margin-top: 25px;

  overflow: hidden;
  overflow-y: scroll;

  @media (min-width: 1024px) {
    grid-area: ed;
  }
`

const Editor = () => {
  const menuReducer = useSelector(state => state.menuReducer);
  const {isOpened, modalName} = menuReducer.modal;
  const {menuName} = menuReducer.menu;
  const dispatch = useDispatch();

  return(
    <MainContainer>
      <React.Fragment>
        <BurgerButton onClick = {e => {
          e.preventDefault();
          dispatch(showModal('navbar'))
        }}/>
        <DottedButton onClick = {e =>{
          e.preventDefault();
          dispatch(showModal('sideMenu'))
        }}/>
      </React.Fragment>
      <ImageContainer/>
      <EditingContainer>
        {menuName === 'filters'
        &&
        <Filters/>
        }
        {menuName === 'presets'
        &&
        <Preset/>
        }
      </EditingContainer>
      <React.Fragment>
        {modalName === 'navbar' &&
          <Navigation/>
        }
        {modalName === 'sideMenu' && isOpened &&
          <SideMenu/>
        }
      </React.Fragment>
    </MainContainer>
  )
}

export default Editor
