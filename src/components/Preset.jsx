import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

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

const PresetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(4, 150px);
  justify-content: center;
  grid-gap: 25px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(2, 150px)
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 150px);
    grid-template-rows: repeat(2, 150px)
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

const Preset = () => {
  const url = useSelector(state => state.isImgLoaded.url);

  return(
    <PresetContainer>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={url} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={url} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={url} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={url} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={url} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={url} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
      <PresetWrapper>
        <PresetName>будешь?</PresetName>
        <img src={url} width='100%' height='100%' alt='cat'/>
      </PresetWrapper>
    </PresetContainer>
  )
}

export default Preset
