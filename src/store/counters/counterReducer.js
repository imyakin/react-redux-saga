import * as types from "../types"

const initialState = {
    counter: 0,
    counter2: 5
}
export const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case types.INCREMENT: {
            return {...state, counter: state.counter + 1}
        }
        case types.DECREMENT: {
            return {...state, counter: state.counter - 1}
        }
        case types.INCREMENT_2: {
            return {...state, counter2: state.counter2 + action.payload}
        }
        case types.DECREMENT_2: {
            return {...state, counter2: state.counter2 - action.payload}
        }
        default: return state
    }
}