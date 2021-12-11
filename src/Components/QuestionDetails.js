import { useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'


import {
    Radio, RadioGroup, FormControlLabel,
    FormControl, FormLabel, Box,
    Avatar
} from '@mui/material'
import LinearProgressWithLabel from './LinearProgressWithLabel'

import { addAnswer } from '../Actions/Share'


const cssStyle = {
    width: "500px",
    border: "1px solid #af712a",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "5px 5px rgba(172, 156, 138, 0.61)",
}




const QuestionDetails = props => {
    const params = useParams()
    const qid = params.id
    const { questions, users, editAnswer, authentication } = props

    const [answer] = useState(users[authentication].answers[qid])
    // const [answer, setAnswer] = useState(users[authentication].answers[qid])
    // const handleRadio = ({ target }) => setAnswer(target.value)

    const question = questions[qid]
    if (!question) {
        return <Navigate to='/NotFoundQuestion' replace={true} />
    }

    const author = users[question.author]
    const { optionOne, optionTwo } = question
    const totalVotes = (optionOne.votes.length + optionTwo.votes.length) / 100

    const handleSubmit = event => {
        event.preventDefault()

        editAnswer({
            authedUser: authentication,
            qid,
            answer
        })
    }


    return (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", margin: "40px auto" }}>
            <Box component="form" sx={cssStyle} onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar alt={author.name} src={author.avatarURL} />
                        <span>{author.name}</span>
                    </div>

                    <FormLabel component="legend">Would You Rather..</FormLabel>
                    {/* <RadioGroup aria-label="Would You Rather.." onChange={handleRadio}  > */}
                    <RadioGroup aria-label="Would You Rather.."  >
                        <FormControlLabel checked={answer === "optionOne"} value="optionOne" control={<Radio />} label={optionOne.text} />
                        <LinearProgressWithLabel value={optionOne.votes.length / totalVotes} number={optionOne.votes.length} />

                        <FormControlLabel checked={answer === "optionTwo"} value="optionTwo" control={<Radio />} label={optionTwo.text} />
                        <LinearProgressWithLabel value={optionTwo.votes.length / totalVotes} number={optionTwo.votes.length} />
                    </RadioGroup>

                    <div style={{ display: "flex", width: "400px" }}>
                        {/* <Button fullWidth sx={{ flexGrow: 1, mt: 1, mr: 1 }} type="submit" variant="outlined">
                            Edit Vote
                        </Button> */}
                    </div>
                </FormControl>
            </Box>
        </div>
    )
}

QuestionDetails.propTypes = {
    questions: PropTypes.object.isRequired,
    authentication: PropTypes.string.isRequired,
    editAnswer: PropTypes.func.isRequired
}

const mapStateToProps = ({ questions, authentication, users }) => ({
    questions,
    authentication,
    users
})

const mapDispatch = dispatch => ({
    editAnswer: (a) => dispatch(addAnswer(a))
})

export default connect(mapStateToProps, mapDispatch)(QuestionDetails)

