import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { changeFilterValue, imgData, setImgLoading } from '../actions/index.js'
import axios from 'axios'

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
    background: #939393;
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
  const filters = useSelector(state => state.filters);
  // const filter = useSelector(state => state.filters[props.id]);
  const filter = filters[props.id]
  const fileName = useSelector(state => state.isImgLoaded.fileName);
  const rangeRef = useRef(null);
  const dispatch = useDispatch();

  const { name, value, id, desc, min, max, step } = filter

  // useEffect(() => {
  //   setResetValue(filter.value);
  //   // dispatch(setImgLoading());
  //   setChange()
  //   console.log(filter.value);
  // }, [filter.value])

  const handleChange = () => {
     const refValue = rangeRef.current.value;
     dispatch(changeFilterValue(refValue, id))
   }

   // const setChange = async (name, refValue) => {
   //   const url = 'http://localhost:8000/edit';
   //   const params = {
   //     fileName,
   //     filters,
   //   };
   //   axios.post(url, {params})
   //   .then(res => {
   //     const { dataUrl, fileName } = res.data;
   //     dispatch(imgData(dataUrl, fileName));
   //   })
   //   .catch(err => {
   //     console.log(err);
   //   })
   // }

   // const setResetValue = value => {
   //   rangeRef.current.value = value;
   // }

  return(
    <FilterWrapper>
      <Label>{desc}</Label>
      <Range
        type = 'range'
        min = {min}
        max = {max}
        step = {step}
        defaultValue = {value}
        ref = {rangeRef}
        onChange = {handleChange}
        disabled = {false}
      />
    </FilterWrapper>
  )
}

export default Filter
