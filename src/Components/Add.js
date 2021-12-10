import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
    TextField, FormControl,
    Box, Button, FormLabel
} from '@mui/material'

import { addQuestion } from '../Actions/Question'

const Add = props => {
    const [newQuestion, setNewQuestion] = useState({
        optionOne: '',
        optionTwo: ''
    })
    const navigate = useNavigate()

    const handleChange = ({ target }) => setNewQuestion(q => ({ ...q, [target.id]: target.value }))


    const handleAddQuestion = event => {
        event.preventDefault()
        if (!newQuestion.optionOne || !newQuestion.optionTwo) {
            return alert("Error: insert Data ")
        }

        if (newQuestion.optionOne.toLowerCase() === newQuestion.optionTwo.toLowerCase()) {
            return alert("Error: There is no difference between the two answers")
        }

        if (newQuestion.optionOne.length > 300 || newQuestion.optionTwo.length > 300) {
            return alert("The answer must be less than 300 characters")
        }

        props.addQuestion({
            optionOneText: newQuestion.optionOne,
            optionTwoText: newQuestion.optionTwo,
            author: props.author
        })

        navigate("/")
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

                <Button onClick={handleAddQuestion}
                    variant="contained" color="warning" disableElevation
                    disabled={!newQuestion.optionOne ? true : (!newQuestion.optionTwo ? true : false)}>
                    Save Question
                </Button>
            </FormControl>
        </Box>
    )
}

Add.propTypes = {
    addQuestion: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        author: state.authentication,
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({ addQuestion: (q) => dispatch(addQuestion(q)) })


export default connect(mapStateToProps, mapDispatchToProps)(Add)

