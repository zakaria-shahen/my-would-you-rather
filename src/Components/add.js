import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addQuestion } from '../Actions/Question'

import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormLabel from '@mui/material/FormLabel'

const Add = props => {
    const [newQuestion, setNewQuestion] = useState({
        optionOne: '',
        optionTwo: ''
    })


    const handleChangeOption = event => {
        const key = event.target.id
        const value = event.target.value
        setNewQuestion({ [key]: value })
    }

    const handleAddQuestion = event => {
        event.preventDefault()
        if (newQuestion.optionOne === undefined || newQuestion.optionTwo === undefined) {
            return
        }

        // { optionOneText, optionTwoText, author }
        props.dispatch(addQuestion({
            optionOneText: newQuestion.optionOne,
            optionTwoText: newQuestion.optionTwo,
            author: props.author
        }))
    }

    return (

        <div style={{ "padding": "50px 150px" }}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <FormLabel sx={{ fontSize: "25px", textTransform: "capitalize", margin: "8px auto" }}>
                        would you rather....
                    </FormLabel>
                    <TextField label="Option One" value={newQuestion.optionTwo} />
                    <br />
                    <TextField label="Option Two" value={newQuestion.optionTwo} />

                    <br />

                    <Button onClick={handleAddQuestion} variant="contained" color="warning" disableElevation>
                        Save Question
                    </Button>
                </FormControl>
            </Box>
        </div>


    )
}

Add.propTypes = {
    dispatch: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        author: state.Authentication
    }
}


export default connect(mapStateToProps)(Add)

