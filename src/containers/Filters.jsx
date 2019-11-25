import React from 'react'
import Filter from '../components/Filter.jsx'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const FiltersWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    grid-gap: 30px;
  }
`


const Filters = () => {
  const filters = useSelector(state => state.filters);
  const createFilters = () => Object.keys(filters).map(id => <Filter key = {id} id = {id}/>)

  return(
    <FiltersWrapper>
      {createFilters()}
    </FiltersWrapper>
  )
}

export default Filters
