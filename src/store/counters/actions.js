import {DECREMENT, DECREMENT_2, INCREMENT, INCREMENT_2} from "../types";

export function increment(){
    return ({
        type: INCREMENT
    })
}

export function decrement(){
    return ({
        type: DECREMENT
    })
}

export function increment2(num){
    return ({
        type: INCREMENT_2,
        payload: num
    })
}

export function decrement2(num){
    return ({
        type: DECREMENT_2,
        payload: num
    })
}