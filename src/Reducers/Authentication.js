import { LOGIN, LOGOUT } from '../Actions/Authentication'

export function authentication(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return action.loginInfo.id
        case LOGOUT:
            return {}
        default:
            return state
    }
}