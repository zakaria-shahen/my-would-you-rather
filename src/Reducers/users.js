import {ADD_ANSWER, REMOVE_ANSWER} from '../Actions'

export function users(state = {}, action){
    switch (action.type){
        case ADD_ANSWER:
            return {
                ...state,
                [state.answer.id]: state.answer
            }
        case reo
        default:
            return state
    }
}