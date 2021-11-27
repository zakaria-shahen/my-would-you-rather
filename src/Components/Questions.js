import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import Question from './Question'


const Questions = props => {

    return (
        <>
            {props.questions.map(qid => <Question id={qid} />)}
        </>
    )
}

Questions.propTypes = {
    questions: PropTypes.array.isRequired,
    filterBy: PropTypes.string.isRequired
}


const mapStateToProps = (state, onwProps) => {
    const { questions, users, authentication } = state
    const { filterBy } = onwProps || "answer"
    const answered = users[authentication].answers

    // Filter by date 
    const qKeys = Object.keys(questions)
    let questionsOrder = qKeys.sort((a, b) => questions[a].timestamp - questions[b].timestamp)

    // if Filter not Answer (unAnswer)
    if (filterBy !== "answer") {
        questionsOrder.filter(qid => !answered.include(qid))
    }

    return {
        questions: questionsOrder
    }
}

export default connect(mapStateToProps)(Questions)