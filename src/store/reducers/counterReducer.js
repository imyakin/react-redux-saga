import { DECREMENT, DECREMENT_2, INCREMENT, INCREMENT_2 } from "../types"

const initialState = {
    counter: 0,
    counter2: 5
}
export const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT: {
            return {...state, counter: state.counter + 1}
        }
        case DECREMENT: {
            return {...state, counter: state.counter - 1}
        }
        case INCREMENT_2: {
            return {...state, counter2: state.counter2 + action.payload}
        }
        case DECREMENT_2: {
            return {...state, counter2: state.counter2 - action.payload}
        }
        default: return state
    }
}