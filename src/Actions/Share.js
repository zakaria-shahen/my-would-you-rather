import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../API/_DATA'
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



export const addAnswer = answer => reducer => _saveQuestionAnswer(answer).then(() => {
    reducer(addAnswerFormat(answer))
})

export const removeAnswer = answer => reducer => _saveQuestionAnswer(answer).then(() => {
    // TODO: create API function remove answer ON _DATA.js
    reducer(removeAnswerFormat(answer))
})
