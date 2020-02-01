import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Preset } from '../components/preset.jsx'

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

const Presets = () => {
  const url = useSelector(state => state.isImgLoaded.url);
  const presets = useSelector(state => state.presets);

  const createPresets = () =>
  Object
  .keys(presets)
  .map(id =>
    <Preset
      key = {id}
      url = {url}
      name = {presets[id].name}
      desc = {presets[id].desc}
      value = {presets[id].value}
    />
  );

  return(
    <PresetContainer>
      {createPresets()}
    </PresetContainer>
  )
}

export default Presets
