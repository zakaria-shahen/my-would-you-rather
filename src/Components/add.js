import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import { addQuestion } from '../Actions/Question'
import {
    TextField, FormControl,
    Box, Button, FormLabel
} from '@mui/material'


const Add = props => {
    const [newQuestion, setNewQuestion] = useState({
        optionOne: '',
        optionTwo: ''
    })
    const navigate = useNavigate()

    const handleChange = event => setNewQuestion(q => ({ ...q, [event.target.id]: event.target.value }))



    const handleAddQuestion = event => {
        event.preventDefault()
        if (newQuestion.optionOne === undefined || newQuestion.optionTwo === undefined) {
            return alert("Error: insert Data ")
        }

        props.dispatch(addQuestion({
            optionOneText: newQuestion.optionOne,
            optionTwoText: newQuestion.optionTwo,
            author: props.author
        }))

        navigate("/LeaderBoard")
    }

    return (
        <Box sx={{ minWidth: 120, margin: "50px 150px" }} component="form">
            <FormControl fullWidth>
                <FormLabel sx={{ fontSize: "25px", textTransform: "capitalize", margin: "8px auto" }}>
                    would you rather....
                </FormLabel>
                <TextField id="optionOne" onChange={handleChange} value={newQuestion.optionOne}
                    label="Option One" color="warning" />
                <br />
                <TextField id="optionTwo" onChange={handleChange} value={newQuestion.optionTwo}
                    label="Option Two" color="warning" />

                <br />

                <Button onClick={handleAddQuestion} variant="contained" color="warning" disableElevation>
                    Save Question
                </Button>
            </FormControl>
        </Box>
    )
}

Add.propTypes = {
    dispatch: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        author: state.authentication
    }
}


export default connect(mapStateToProps)(Add)

