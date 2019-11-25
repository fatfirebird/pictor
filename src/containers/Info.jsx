import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { hideModal } from '../actions/index.js'

const Layer = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: rgba(20, 20, 20, 0.9);
`

const InfoSection = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  width: 200px;
  height: 200px;

  background-color: #fff;

  transform: translate(-50%, -50%);
`

const Info = () => {
  const dispatch = useDispatch();

  return(
    <Layer onClick={()=>{
      dispatch(hideModal('info'))
    }}>
      <InfoSection>
        Подсказки
      </InfoSection>
    </Layer>
  )
}

export default Info
