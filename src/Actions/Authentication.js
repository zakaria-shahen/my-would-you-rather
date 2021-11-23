export const LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"


// loginInfo = {username, password}
export const login = loginInfo => ({
    type: LOGIN,
    loginInfo
})

export const logout = () => ({
    type: LOGOUT
})
