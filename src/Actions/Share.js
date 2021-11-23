import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../API/_DATA'
import { loadQuestions } from './Question'
import { loadUsers } from './Users'

const ADD_ANSWER = "ADD_ANSWER",
    REMOVE_ANSWER = "REMOVE_ANSWER"


export function load() {

    return reducer => {
        _getUsers().then(users => {
            reducer(loadUsers(users))
            _getQuestions().then(questions => reducer(loadQuestions(questions)))
        })
    }
}

export const addAnswer = answer => reducer => _saveQuestionAnswer(answer).then(() => {
    reducer({
        type: ADD_ANSWER,
        ...answer
    })
})

export const removeAnswer = answer => reducer => _saveQuestionAnswer(answer).then(() => {
    // TODO: create API function remove answer ON _DATA.js
    reducer({
        type: REMOVE_ANSWER,
        answer
    })
})
