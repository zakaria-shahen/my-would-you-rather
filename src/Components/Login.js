import { PropTypes } from 'prop-types'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { login } from '../Actions/Authentication'


import {
    Box, InputLabel, MenuItem,
    FormControl, Select, Button
} from '@mui/material'

const Login = props => {

    const [username, setUsername] = useState("default")
    const navigate = useNavigate()
    const handleUsername = event => setUsername(event.target.value)

    const targetPath = useLocation()

    const handleLogin = event => {
        event.preventDefault()
        if (username === "default") {
            alert("Error: Yor not Select Username")
            return
        }

        props.dispatch(login(props.users[username]))

        navigate(targetPath.state?.path || "/")
    }


    return (
        <div style={{ "padding": "50px 150px" }}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel color="warning">Username</InputLabel>
                    <Select value={username} onChange={handleUsername} color="warning">
                        <MenuItem value="default" disabled>Select Username</MenuItem>
                        {props.usersIDs.map(id => (
                            <MenuItem key={id} value={id}>{props.users[id].name}</MenuItem>
                        ))}
                    </Select>

                    <br />

                    <Button onClick={handleLogin} variant="contained" color="warning" disableElevation>
                        Login
                    </Button>
                </FormControl>
            </Box>
        </div>
    )
}

Login.propTypes = {
    users: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}


const mapStateToProps = state => {
    const { users } = state
    return {
        usersIDs: Object.keys(users),
        users
    }
}


export default connect(mapStateToProps)(Login)




