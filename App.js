import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import FlashCards from './containers/FlashCards'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FlashCards />
      </Provider>
    )
  }
}

export default App
