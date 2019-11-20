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

const Filter = () => {
  return(
    <FilterWrapper>
      <Label>Фильтрнейм</Label>
      <input type = 'range' min = '0' max = '1' step = '0.1' defaultValue = '0'/>

    </FilterWrapper>
  )
}

export default Filter
