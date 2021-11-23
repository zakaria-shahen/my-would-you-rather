import { combineReducers } from 'redux'
import { users } from './Users'
import { questions } from  './Questions'
import { authentication } from './Authentication'

export default combineReducers({
    users,
    questions,
    authentication
})