import React from 'react'
import Filter from '../components/Filter.jsx'
import { useSelector } from 'react-redux'

const Filters = () => {
  const filters = useSelector(state => state.filters);
  const createFilters = () => Object.keys(filters).map(id => <Filter key = {id} id = {id}/>)

  return(
    <div>
      {createFilters()}
    </div>
  )
}

export default Filters
