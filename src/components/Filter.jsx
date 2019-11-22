import React from 'react'
import styled from 'styled-components'

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 25px;
`
const Label = styled.label`
  display: block;
  align-self: flex-start;

  margin-bottom: 15px;
`

const Range = styled.input`
  & {
    -webkit-appearance: none;
    width: 100%;
    margin: 10px 0;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #939393;
  }
  &::-webkit-slider-thumb {
    border: 4px solid #939393;
    height: 25px;
    width: 25px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #9b9b9b;
  }
  &::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #939393;
  }
  &::-moz-range-thumb {
    border: 4px solid #939393;
    height: 25px;
    width: 25px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #8b8b8b;
    border: 0px solid rgba(0, 0, 1, 0);
    border-radius: 0px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  }
  &::-ms-fill-upper {
    background: #939393;
    border: 0px solid rgba(0, 0, 1, 0);
    border-radius: 0px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  }
  &::-ms-thumb {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
    border: 4px solid #939393;
    height: 25px;
    width: 25px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    height: 5px;
  }
  &:focus::-ms-fill-lower {
    background: #939393;
  }
  &:focus::-ms-fill-upper {
    background: #9b9b9b;
  }
`

const Filter = () => {
  return(
    <FilterWrapper>
      <Label>Фильтрнейм</Label>
      <Range type = 'range' min = '0' max = '1' step = '0.1' defaultValue = '0'/>
    </FilterWrapper>
  )
}

export default Filter
