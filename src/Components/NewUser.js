import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Box, FormControl, FormLabel,
    TextField, Button
} from '@mui/material'
import { newUser } from '../Actions/Users'


const NewUser = props => {
    const [user, setUser] = useState({
        id: "",
        name: "",
        avatarURL: ""
    })

    const navigate = useNavigate()

    const handelAddUser = event => {
        event.preventDefault()

        if (!user.id || !user.name || !user.avatarURL) {
            alert("Error: Yor not Insert username and/or name and/or avatarURL")
            return
        }

        props.newUser(user)
        navigate("/")

    }

    const handelInput = ({ target }) => setUser(user => ({ ...user, [target.id]: target.value }))

    return (
        <Box sx={{ minWidth: 120, margin: "50px 150px" }} component="form">
            <FormControl fullWidth>
                <FormLabel sx={{ fontSize: "25px", textTransform: "capitalize", margin: "8px auto" }}>
                    New user
                </FormLabel>
                <TextField id="id" onChange={handelInput} value={user.id}
                    label="Username" color="warning" />
                <br />
                <TextField id="name" onChange={handelInput} value={user.name}
                    label="Name" color="warning" />
                <br />
                <TextField id="avatarURL" onChange={handelInput} value={user.avatarURL}
                    label="avatarURL" color="warning" />

                <br />

                <Button onClick={handelAddUser} variant="contained" color="warning" disableElevation>
                    Add User
                </Button>
            </FormControl>
        </Box>

    )
}


NewUser.propTypes = {
    newUser: PropTypes.func.isRequired
}

const mapDispatch = dispatch => ({ newUser: (a) => dispatch(newUser(a)) })

export default connect(null, mapDispatch)(NewUser)