import {ADD_QUESTION, REMOVE_QUESTION} from '../Actions/Question'

export function questions(state = {}, action){
    switch (action.type){
        case ADD_QUESTION:
            return {
                ...state, // Error: copy 2 level
                [action.question.id]: action.question
            }
        // case REMOVE_QUESTION: // copy 2 level
        //     return  {
        //         ...state
        //     }
        default:
            return state
    }

    
}