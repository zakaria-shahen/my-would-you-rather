import { _saveQuestion } from '../API/_DATA'


export const ADD_QUESTION = "ADD_QUESTION",
    REMOVE_QUESTION = "REMOVE_QUESTION",
    LOAD_QUESTIONS = "LOAD_QUESTIONS"

export const loadQuestions = questions => ({
    type: LOAD_QUESTIONS,
    questions
})

export const addQuestion = (question) => reducer => _saveQuestion(question)
    .then(formatQuestion => reducer({
        type: ADD_QUESTION,
        question: formatQuestion
    }))

export const removeQuestion = questionId => ({
    type: REMOVE_QUESTION,
    questionId
})
