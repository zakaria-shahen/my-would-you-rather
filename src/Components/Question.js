import { useState, forwardRef } from 'react'
import { connect } from 'react-redux'
import { PropTypes, } from 'prop-types'
import { Link } from 'react-router-dom'

import { addAnswer, editAnswer } from '../Actions/Share'

import {
    Radio, RadioGroup, FormControlLabel,
    FormLabel, Button, Box,
} from '@mui/material'



const cssStyle = {
    width: "500px",
    border: "1px solid #af712a",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "5px 5px rgba(172, 156, 138, 0.61)",
}

const Question = props => {
    const [answer, setAnswer] = useState(props.ifAnswer ? props.ifAnswer : "")
    const handleRadio = ({ target }) => !props.ifAnswer && setAnswer(target.value)

    const handleSubmit = event => {
        event.preventDefault()
        const { authedUser, question, addAnswer, editAnswer } = props

        if (!answer) {
            alert("Not input")
            return
        }

        if (props.ifAnswer) {
            editAnswer({
                authedUser,
                qid: question.id,
                answer
            })
            return
        }

        // this is addAnswer inside props object
        addAnswer({
            authedUser,
            qid: question.id,
            answer
        })
    }

    const ButtonRouter = forwardRef((props, ref) => (
        <Link ref={ref}  {...props} />
    ))

    return (
        <Box component="form" sx={{ ...cssStyle, p: 3 }} >
            <FormLabel sx={{ fontSize: "21px", ml: "30%" }}>Would You Rather..</FormLabel>
            <RadioGroup aria-label="Would You Rather.." onChange={handleRadio}  >
                <FormControlLabel
                    checked={answer === "optionOne"}
                    value="optionOne"
                    control={<Radio />} label={props.question.optionOne.text} />

                {props.ifAnswer && (
                    <div>Votes: {props.question.optionOne.votes.length}</div>
                )}

                <FormControlLabel
                    checked={answer === "optionTwo"}
                    value="optionTwo"
                    control={<Radio />} label={props.question.optionTwo.text} />

                {props.ifAnswer && (
                    <div>Votes: {props.question.optionTwo.votes.length}</div>
                )}

            </RadioGroup>

            <Box sx={{ display: "flex", width: "400px", justifyContent: "center", mt: 2, a: { flexGrow: 1, pt: 1, ml: 2 } }}>
                {
                    !props.ifAnswer && (
                        <Button
                            onClick={handleSubmit}
                            fullWidth
                            variant="outlined">
                            {props.ifAnswer ? "Edit Vote" : "Vote"}
                        </Button>
                    )
                }

                <Button
                    component={ButtonRouter}
                    to={`/questions/${props.question.id}`}
                    fullWidth
                    variant="outlined">
                    details
                </Button>
            </Box>
        </Box>

    )
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
    addAnswer: PropTypes.func.isRequired,
    ifAnswer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}



const mapPropsToState = (state, ownerProps) => {
    const { questions, authentication } = state
    let { id } = ownerProps

    const question = questions[id]
    let ifAnswer = question.optionOne.votes.includes(authentication) && "optionOne"
    ifAnswer = ifAnswer ? ifAnswer : question.optionTwo.votes.includes(authentication) && "optionTwo"
    return {
        question,
        authedUser: authentication,
        ifAnswer
    }
}

const mapDispatch = dispatch => ({
    addAnswer: (a) => dispatch(addAnswer(a)),
    editAnswer: (a) => dispatch(editAnswer(a))
})


export default connect(mapPropsToState, mapDispatch)(Question)