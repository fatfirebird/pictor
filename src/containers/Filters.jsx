import React, { useEffect } from 'react'
import Filter from '../components/Filter.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilters } from '../actions/index.js'
import styled from 'styled-components'
import axios from 'axios'

const FiltersWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    grid-gap: 30px;
  }
`

const Filters = () => {
  const filters = useSelector(state => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFilter = async () => {
      const url = 'http://localhost:8000/data/filters.json';
      await axios.get(url)
      .then(res => {
        const fetchedFilters = res.data.filters;
        for (const filter of fetchedFilters) {
          dispatch(fetchFilters(filter))
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
    fetchFilter();
  }, [])

  const createFilters = () => Object.keys(filters).map(id => <Filter key = {id} id = {id}/>);

  return(
    <FiltersWrapper>
      {createFilters()}
    </FiltersWrapper>
  )
}

export default Filters
