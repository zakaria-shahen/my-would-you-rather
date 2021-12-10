import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import Question from './Question'

const Questions = props => {

    const cssStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "30px"
    }

    return (
        <div style={cssStyle}>
            {props.questions.map(qid => <Question id={qid} key={qid} />)}
        </div>
    )
}

Questions.propTypes = {
    questions: PropTypes.array.isRequired,
    filterBy: PropTypes.string.isRequired
}


const mapStateToProps = (state, onwProps) => {
    const { questions, users, authentication } = state
    const { filterBy } = onwProps
    const answered = Object.keys(users[authentication].answers)

    // order by date 
    const qKeys = Object.keys(questions)
    let order = qKeys.sort((a, b) => (questions[a].timestamp - questions[b].timestamp) * -1)

    //  1-> unAnswer | 2-> Answer
    return {
        questions: filterBy === "1"
            ? order.filter(qid => !answered.includes(qid))
            : order.filter(qid => answered.includes(qid))
    }
}

export default connect(mapStateToProps)(Questions)