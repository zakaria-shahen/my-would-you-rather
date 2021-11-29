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
    const [answer, setAnswer] = useState(props.ifAnswer ? props.ifAnswer : "")

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
                <RadioGroup aria-label="Would You Rather.." onChange={handleRadio}  >
                    <FormControlLabel checked={answer === "optionOne"} value="optionOne" control={<Radio />} label={props.question.optionOne.text} />
                    {props.ifAnswer && (
                        <div>{props.question.optionOne.votes.length}</div>
                    )}
                    <FormControlLabel checked={answer === "optionTwo"} value="optionTwo" control={<Radio />} label={props.question.optionTwo.text} />
                    {props.ifAnswer && (
                        <div>{props.question.optionTwo.votes.length}</div>
                    )}

                </RadioGroup>

                <div style={{ display: "flex", width: "400px" }}>
                    <Button fullWidth sx={{ flexGrow: 1, mt: 1, mr: 1 }} type="submit" variant="outlined">
                        {props.ifAnswer ? "Edit Vote" : "Vote"}
                    </Button>
                    {console.log(answer)}
                    {
                        props.ifAnswer && (
                            <Button fullWidth sx={{ flexGrow: 1, mt: 1, mr: 1 }} href={`/question/${props.question.id}`} variant="outlined">
                                details
                            </Button>
                        )
                    }
                </div>
            </FormControl>
        </Box>

    )
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    ifAnswer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}



const mapPropsToState = (state, ownerProps) => {
    const { questions, authentication } = state
    const { id } = ownerProps
    const question = questions[id]
    let ifAnswer = question.optionOne.votes.includes(authentication) && "optionOne"
    ifAnswer = ifAnswer ? ifAnswer : question.optionTwo.votes.includes(authentication) && "optionTwo"
    return {
        question,
        authedUser: authentication,
        ifAnswer
    }
}


export default connect(mapPropsToState)(Question)



