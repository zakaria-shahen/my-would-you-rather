import { connect } from 'react-redux'
import { propTypes } from 'prop-types'
import { useState } from 'react'

const LeaderBoard = props => {

    const [questions, setQuestions] = useState({
        unanswered: undefined,
        questions: props.questions
    })

    const [user, setUser] = useState(props.user)

    const filterBy = (unanswered = true) => {

        if ((unanswered === true && questions.unanswered === true)
            || (unanswered === false && questions.unanswered === false)) {
            return
        }

        const userAnswers = Object.keys(user.answers)

        const filterQ = questions.getOwnPropertyNames().filter(qid => userAnswers.includes(qid))


    }

    const orderByDate = (questions) => {

    }


    const handlerAnswered = () => filterBy(false)

    return (
        <div>
            <div>
                <ul>
                    <li onClick={handlerAnswered}>answered</li>
                    <li onClick={filterBy}>unanswered</li>
                </ul>
            </div>
        </div>
    )
}

LeaderBoard.propTypes = {
    user: propTypes.object.isRequired,
    questions: propTypes.object.isRequired

}

export default connect()(LeaderBoard)