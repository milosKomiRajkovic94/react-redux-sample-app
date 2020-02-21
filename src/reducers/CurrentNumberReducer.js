import {
    SET_CURRENT_NUMBER,
    INCREASE_CURRENT_NUMBER_BY_ONE,
    DECREASE_CURRENT_NUMBER_BY_ONE
} from '../actions/actionTypes';

import {initialState} from '../initialState';

export default function currentNumberReducer(state = initialState, action){
    switch(action.type){
        case SET_CURRENT_NUMBER: {
            return{
                currentNumber: action.currentNumber
            }
        }

        case INCREASE_CURRENT_NUMBER_BY_ONE: {
            return {
                currentNumber: state.currentNumber + 1
            }
        }

        case DECREASE_CURRENT_NUMBER_BY_ONE: {
            return {
                currentNumber: state.currentNumber - 1
            }
        }

        default: {
            return state
        }
    }
}