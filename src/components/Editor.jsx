import React from 'react'
import { connect } from 'react-redux'

const Editor = (props) => {
  return (
    <div>
      <button onClick = {()=>{console.log(props.id)}}>
        123
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    id: state.type
  }
}

export default connect(mapStateToProps)(Editor)
