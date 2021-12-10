import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducers from './Reducers'
import middleware from './Middleware'

import './index.css'

import { CssBaseline } from '@mui/material'
import App from './Containers/App'

const store = createStore(Reducers, middleware)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

