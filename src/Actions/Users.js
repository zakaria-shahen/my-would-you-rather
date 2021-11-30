import { newUser as newUserAPI } from '../API/_DATA'
import { login } from './Authentication'

export const LOAD_USERS = "load_users"
export const NEW_USER = "new_user"

export const loadUsers = users => ({
    type: LOAD_USERS,
    users
})

const newUserFormat = user => ({
    type: NEW_USER,
    user
})

export const newUser = user => reducer => {

    newUserAPI(user)
        .then(() => reducer(newUserFormat(user))).then(() => login(user))

    // newUserAPI(user).catch((e) => {
    //     logout()
    //     removeUser()
    // })

}
