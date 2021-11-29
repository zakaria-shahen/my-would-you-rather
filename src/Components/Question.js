import { useState } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { addAnswer } from '../Actions/Share'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const cssStyle = {
    width: "500px",
    border: "1px solid #af712a",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "5px 5px rgba(172, 156, 138, 0.61)",
}

const Question = props => {
    const [answer, setAnswer] = useState("")

    const handleRadio = event => setAnswer(event.target.value)


    const handleSubmit = event => {
        event.preventDefault()
        const { authedUser, question, dispatch } = props

        if (!answer) {
            alert("Not input")
            return
        }
        dispatch(addAnswer({
            authedUser,
            qid: question.id,
            answer
        }))
    }


    return (
        <Box component="form" sx={cssStyle} onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">

                <FormLabel component="legend">Would You Rather..</FormLabel>
                <RadioGroup aria-label="Would You Rather.." onChange={handleRadio} >
                    <FormControlLabel value="optionOne" control={<Radio />} label={props.question.optionOne.text} />
                    <FormControlLabel value="optionTwo" control={<Radio />} label={props.question.optionTwo.text} />
                </RadioGroup>

                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                    Vote
                </Button>
            </FormControl>
        </Box>

    )
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}



const mapPropsToState = (state, ownerProps) => {
    const { questions, authentication } = state
    const { id } = ownerProps
    return {
        question: questions[id],
        authedUser: authentication
    }
}


export default connect(mapPropsToState)(Question)



