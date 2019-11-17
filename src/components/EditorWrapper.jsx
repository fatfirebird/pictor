import React from 'react'
import Filter from './Filter.jsx'
import Navigation from './Navigation.jsx'
import { MainContainer } from '../styles/containers.js'

const Editor = () => {
  return(
    <MainContainer>
      <Navigation />
      <section>
        <div>
        png
        </div>
        <section>
          <h3>Фильтры</h3>
          <Filter />
          <Filter />
          <Filter />
          <Filter />
          <Filter />
        </section>
        <div>
          123
        </div>
      </section>
    </MainContainer>
  )
}

export default Editor
