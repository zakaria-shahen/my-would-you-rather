import { ADD_QUESTION, LOAD_QUESTIONS, REMOVE_QUESTION } from '../Actions/Question'
import { ADD_ANSWER, REMOVE_ANSWER } from '../Actions/Share'


export function questions(state = {}, action) {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return action.questions

        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }


        case REMOVE_QUESTION:
            const newState = { ...state }
            // console.log(state[action.questionId])

            delete newState[action.questionId]
            // console.log(newState[action.questionId])
            return newState

        case ADD_ANSWER: {
            const { qid, authedUser, answer } = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }

        }

        case REMOVE_ANSWER: {
            const { qid, authedUser, answer } = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.filter(id => id !== authedUser)
                    }

                }

            }
        }

        default:
            return state
    }

}
