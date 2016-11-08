import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import logbook from './reducers'
import App from './components/App'
import './index.css'

let store = createStore(logbook)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
