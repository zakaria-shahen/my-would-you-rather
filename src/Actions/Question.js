export const ADD_QUESTION = "ADD_QUESTION",
    REMOVE_QUESTION = "REMOVE_QUESTION"


export function addQuestion(question, userId){
    return {
        type: ADD_QUESTION,
        question,
        userId,
    }
}


export function removeQuestion(questionId){
    return {
        type: REMOVE_QUESTION,
        questionId
    }
}