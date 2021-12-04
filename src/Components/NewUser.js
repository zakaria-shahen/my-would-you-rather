import { useState } from 'react'
import { connect } from 'react-redux'
import { newUser } from '../Actions/Users'
import { useNavigate } from  'react-router-dom'
import {
    Box, FormControl, FormLabel,
    TextField, Button
} from '@mui/material'


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

        props.dispatch(newUser(user))
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

export default connect()(NewUser)