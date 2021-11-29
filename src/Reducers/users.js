import { ADD_ANSWER, REMOVE_ANSWER } from '../Actions/Share'
import {LOAD_USERS} from '../Actions/Users'
import { ADD_QUESTION, REMOVE_QUESTION } from '../Actions/Question'

export function users(state = {}, action) {
    switch (action.type) {
        case LOAD_USERS:
            return action.users

        case ADD_ANSWER: {
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

        }

        case REMOVE_ANSWER: {
            const { authedUser, qid } = action
            const newState = {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answer: {
                        ...state[authedUser].answer
                    }
                }
            }
            delete newState[authedUser].answer[qid]
            return newState
        }

        case ADD_QUESTION: {
            const { id, author } = action.question
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            }
        }

        case REMOVE_QUESTION: {
            const { id, author } = action.question
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.filter(qid => qid !== id)
                }
            }
        }

        default:
            return state
    }
}