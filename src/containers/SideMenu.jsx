import React from 'react'
import { Side } from './PageContainer'
import styled from 'styled-components'
import { Link as link }  from '../components/Link.jsx'
import { CloseButton as closeButton } from '../components/buttons.js'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal, openMenu } from '../actions/index.js'
import {  } from '../'

const Menu = styled(Side)`
  background-color: rgba(0, 0, 0, 0.85);

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 40px 0 0 25px;
  }
`

const Link = styled(link)`
  padding-left: 0;

  color: #fff;

  &:hover,
  &:focus {
    color: #fff
  }
`
const CloseButton = styled(closeButton)`
  top: 45px;
  right: 55px;

  &::after,
  &::before {
    width: 35px;
    height: 4px;
  }

  &::after,
  &::before {
    background-color: #fff
  }

  &:hover::after,
  &:hover::before,
  &:focus::after,
  &:focus::before {
    background-color: #fff
  }
`

const SideMenu = () => {
  const menuReducer = useSelector(state => state.menuReducer.menu);
  const {menuName}  = menuReducer
  const dispatch = useDispatch();
  return(
    <Menu>
      <ul>
        <li>
          <Link>Сохранить изображение</Link>
        </li>
        <li>
          <Link>Отменить изменения</Link>
        </li>
        <li>
        {
          menuName === 'filters'
          &&
          <Link onClick={e => {
            e.preventDefault()
            dispatch(openMenu('presets'))
          }}>Готовые пресеты</Link>
        }
        { menuName === 'presets' &&
          <Link onClick={e => {
            e.preventDefault()
            dispatch(openMenu('filters'))
          }}>Фильтры</Link>
        }
        </li>
        <li>
          <Link>Ввод текста</Link>
        </li>
        <li>
          <Link>Сбросить фильтры</Link>
        </li>
      </ul>
      <CloseButton onClick={e => {
        e.preventDefault()
        dispatch(hideModal('sideMenu'))
      }}/>
    </Menu>
  )
}

export default SideMenu
