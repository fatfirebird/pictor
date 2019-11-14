import React from 'react'
import { connect } from 'react-redux'

const Editor = (props) => {
  return (
    <div>
    123
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    id: state.type
  }
}

export default connect(mapStateToProps)(Editor)
