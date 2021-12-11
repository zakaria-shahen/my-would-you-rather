import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const composeApp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default composeApp(applyMiddleware(logger, thunk))