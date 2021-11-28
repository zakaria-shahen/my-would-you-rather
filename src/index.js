import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducers from './Reducers'
import middleware from './Middleware'

import './index.css'

import { CssBaseline } from '@mui/material'
import AppRouter from './Routes/index'

const store = createStore(Reducers, middleware)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

