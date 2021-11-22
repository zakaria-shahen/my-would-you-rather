import {ADD_QUESTION, REMOVE_QUESTION} from '../Actions'

export function questions(state = {}, action){
    switch (action.type){
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        // case REMOVE_QUESTION:
        //     return  ""
        default:
            return state
    }

    
}