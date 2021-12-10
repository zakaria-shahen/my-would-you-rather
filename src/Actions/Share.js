import { _getQuestions, _getUsers, _saveQuestionAnswer, _removeQuestionAnswer } from '../API/_DATA'
import { loadQuestions } from './Question'
import { loadUsers } from './Users'

export const ADD_ANSWER = "ADD_ANSWER",
    REMOVE_ANSWER = "REMOVE_ANSWER"


const addAnswerFormat = answer => ({
    type: ADD_ANSWER,
    ...answer
})

const removeAnswerFormat = answer => ({
    type: REMOVE_ANSWER,
    ...answer
})


export function load() {

    return reducer => {
        _getUsers().then(users => {
            reducer(loadUsers(users))
            _getQuestions().then(questions => reducer(loadQuestions(questions)))
        })
    }
}



export const addAnswer = answer => reducer => {
    reducer(addAnswerFormat(answer))

    _saveQuestionAnswer(answer).catch((error) => {
        alert("Add Answer Error: try agin... ", error)
        removeAnswer(answer)
    })

}

const removeAnswer = answer => reducer =>
    _removeQuestionAnswer(answer).then(() => reducer(removeAnswerFormat(answer)))


export const editAnswer = answer => dispatch => {
    dispatch(removeAnswer(answer)).then(() => dispatch(addAnswer(answer)))
}

