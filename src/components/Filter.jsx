import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { changeFilterValue } from '../actions/index.js'

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

const thumb = `
  width: 25px;
  height: 25px;

  border: 4px solid #3F51B5;
  border-radius: 50%;

  background: #3F51B5;
  cursor: pointer;
`

const Range = styled.input`
  & {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;

    margin: 10px 0;

    border-radius: 5px;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;

    ${thumb}
  }

  &::-moz-range-thumb {
    ${thumb}
  }
`

const Filter = props => {
  const filter = useSelector(state => state.filters[props.id]);
  const rangeRef = useRef(null);
  const dispatch = useDispatch();

  const { name, value, id } = filter

  useEffect(() => {
    setBackground(value)
    setResetValue(value)
  })

  const handleChange = () => {
     const refValue = rangeRef.current.value;
     dispatch(changeFilterValue(name, refValue, id))
   }

   const setResetValue = value => {
     rangeRef.current.value = value;
   }

  const setBackground = value => {
    return `linear-gradient(90deg, #3F51B5 ${value * 100}%, #939393 ${value * 100}%)`
  }

  return(
    <FilterWrapper>
      <Label>Фильтрнейм</Label>
      <Range
        type = 'range'
        min = '0'
        max = '1'
        step = '0.1'
        defaultValue = {value}
        ref = {rangeRef}
        style = {{background: setBackground(value)}}
        onChange = {handleChange}
      />
    </FilterWrapper>
  )
}

export default Filter
