import React from 'react'
import {Provider} from 'react-redux'
import App from './app'
import store from './store'

const ProvidedApp = () =>(
  <Provider store={store}>
    <App></App>
  </Provider>
)

export default ProvidedApp