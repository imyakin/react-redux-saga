import * as types from "../types"

const initialState = {
    employees: []
}

export const employeeReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SET_EMPLOYEES:
            return {...state, employees: [...state.employees,...action.payload]}
        default: return state
    }
}