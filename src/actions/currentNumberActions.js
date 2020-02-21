import {
    SET_CURRENT_NUMBER,
    INCREASE_CURRENT_NUMBER_BY_ONE,
    DECREASE_CURRENT_NUMBER_BY_ONE
} from './actionTypes';

export function setCurrentNumber(currentNumber){
    return{
        type: SET_CURRENT_NUMBER,
        currentNumber
    }
}

export function increaseCurrentNumberByOne(){
    return{
        type: INCREASE_CURRENT_NUMBER_BY_ONE
    }
}

export function decreaseCurrentNumberByOne(){
    return{
        type: DECREASE_CURRENT_NUMBER_BY_ONE
    }
}