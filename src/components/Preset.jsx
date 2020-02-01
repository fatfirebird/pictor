import React from 'react'
import styled from 'styled-components'

const PresetWrapper = styled.div`
  position: relative;

  cursor: pointer;

  &:hover,
  &:focus {
    transition: 0.3s;
  }

  & img {
    object-fit: cover;
  }
`

const PresetName = styled.span`
  position: absolute;
  bottom: 0px;
  left: 50%;

  width: 100%;

  background-color: rgba(40, 40, 40, 0.7);
  color: #fff;

  transform: translateX(-50%);
`

export const Preset = props => {
  return(
    <PresetWrapper>
      <PresetName>
      {props.desc}
      </PresetName>
      <img src={props.url} width='100%' height='100%' alt='cat'/>
    </PresetWrapper>
  )
}
