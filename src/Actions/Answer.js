export const ADD_ANSWER = "ADD_ANSWER",
    REMOVE_ANSWER = "REMOVE_ANSWER"

export function addAnswer(answer){
    return {
        type: ADD_ANSWER,
        ...answer
    }
}

export function removeAnswer(answerId){
    return {
        type: REMOVE_ANSWER,
        answerId
    }
}