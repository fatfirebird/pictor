import React from 'react'
import cat from '../content/cat.jpg'
import styled from 'styled-components'

const PresetWrapper = styled.div`
  position: relative;

  cursor: pointer;

  &:hover,
  &:focus {
    transition: 0.3s;

  }
`

const PresetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(4, 150px);
  justify-content: center;
  grid-gap: 25px;
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

const Preset = () => {
  return(
    <PresetContainer>
      <PresetWrapper>
        <PresetName>Хуй</PresetName>
        <img src={cat} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={cat} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={cat} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={cat} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={cat} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={cat} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={cat} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={cat} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
    </PresetContainer>
  )
}

export default Preset
