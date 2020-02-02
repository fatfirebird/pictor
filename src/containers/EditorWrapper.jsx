import React, { useEffect } from 'react'
import { MainContainer, Container1 } from './PageContainer.jsx'
import Navigation from './Navigation.jsx'
import {  useSelector, useDispatch } from 'react-redux'
import { showModal, fetchFilters } from '../actions/index.js'
import { BurgerButton, DottedButton } from '../components/buttons.js'
import SideMenu from './SideMenu.jsx'
import styled from 'styled-components'
import Filters from './Filters.jsx'
import ImageContainer from './ImageContainer.jsx'
import Presets from './Presets.jsx'
import Info from './Info.jsx'
import axios from 'axios'

const EditingContainer = styled(Container1)`
  display: block;
  text-align: center;

  margin-top: 25px;

  overflow: hidden;
  overflow-y: scroll;
`

const Editor = () => {
  const menuReducer = useSelector(state => state.menuReducer);
  const isImgLoaded = useSelector(state => state.isImgLoaded);
  const { isLoaded } = isImgLoaded;
  const { isOpened, modalName } = menuReducer.modal;
  const { menuName } = menuReducer.menu;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFilter = async () => {
      const url = 'http://localhost:8000/data/filters.json';
      await axios.get(url)
      .then(res => {
        const fetchedFilters = res.data.filters;
        for (const filter of fetchedFilters) {
          dispatch(fetchFilters(filter))
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
    fetchFilter();
  }, [dispatch])

  return(
    <MainContainer>
      <React.Fragment>
        <BurgerButton onClick = {e => {
          e.preventDefault();
          dispatch(showModal('navbar'))
        }}/>
        {isImgLoaded
        &&
        <DottedButton onClick = {e =>{
          e.preventDefault();
          dispatch(showModal('sideMenu'))
        }}/>
        }
      </React.Fragment>
      <ImageContainer/>
      {isLoaded
      &&
      <EditingContainer>
        {menuName === 'filters'
        &&
        <Filters/>
        }
        {menuName === 'presets'
        &&
        <Presets/>
        }
      </EditingContainer>
      }
      <React.Fragment>
        {modalName === 'navbar' &&
          <Navigation/>
        }
        {modalName === 'sideMenu' && isOpened &&
          <SideMenu/>
        }
        {modalName === 'help' &&
          <Info/>
        }
      </React.Fragment>
    </MainContainer>
  )
}

export default Editor
