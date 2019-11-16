import React from 'react'
import Filter from './Filter.jsx'
import User from './User.jsx'

const Editor = () => {
  return(
    <main>
      <nav>
        <User />
        <ul>
          <li>
          1
          </li>
          <li>
          2
          </li>
          <li>
          3
          </li>
        </ul>
      </nav>
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
    </main>
  )
}

export default Editor
