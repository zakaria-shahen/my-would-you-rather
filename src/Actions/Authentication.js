export const LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"


// loginInfo = {username, password}
export function login(loginInfo) {
    return {
        type: LOGIN,
        loginInfo
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
