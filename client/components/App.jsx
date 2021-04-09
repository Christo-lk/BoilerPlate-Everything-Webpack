import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function App () {
  return (
    <>
      <h1>Welcome to the App!</h1>
    </>
  )
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(App)
