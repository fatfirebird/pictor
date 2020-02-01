import React, { useEffect } from 'react'
import Filter from '../components/Filter.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilters, imgData, editing, loadImg } from '../actions/index.js'
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
  const fileName = useSelector(state => state.isImgLoaded.fileName);
  const disabled = useSelector(state => state.isImgLoaded.disabled);

  useEffect(() => {
    // setResetValue(filter.value);
    // dispatch(setImgLoading());
    dispatch(editing())
    setChange()
    // console.log(filter.value);
  }, [filters]);

  const setChange = async (name, refValue) => {
    const url = 'http://localhost:8000/edit';
    const params = {
      fileName,
      filters,
    };
    axios.post(url, {params})
    .then(res => {
      const { dataUrl, fileName } = res.data;
      dispatch(imgData(dataUrl, fileName));
    })
    .catch(err => {
      console.log(err);
      dispatch(loadImg())
    })
  }

  const createFilters = () => Object.keys(filters).map(id => <Filter key = {id} id = {id} disabled = {disabled}/>);

  return(
    <FiltersWrapper>
      {createFilters()}
    </FiltersWrapper>
  )
}

export default Filters
