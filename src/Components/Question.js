import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { addAnswer } from '../Actions/Share'

const Question = props => {

    const handleSelect = event => {
        const { authedUser, question, dispatch } = props
        dispatch(addAnswer({
            authedUser,
            qid: question.id,
            answer: event.target.id
        }))
    }

    const optionOne = 'optionOne',
        optionTwo = 'optionTwo'

    return (
        <div>
            <h3>Would You Rather..</h3>
            <div>
                <select onChange={handleSelect}>
                    <option id={optionOne}>{props.question.optionOne.text}</option>
                    <option id={optionTwo}>{props.question.optionTwo.text}</option>
                </select>
            </div>

        </div>
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
        authedUser: "authentication" // Error: TODO
    }
}


export default connect(mapPropsToState)(Question)
