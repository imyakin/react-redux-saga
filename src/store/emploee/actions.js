import {getUsers} from "../services/getUsers";
import * as types from '../types'

export const setEmployee = payload => {
    return {
        type: types.SET_EMPLOYEES,
        payload: payload
    }
}

export const loadEmployees = () => async (dispatch) => {
    try{
        const {data} = await getUsers()
        dispatch(setEmployee(data))
    } catch (e){
        console.log('Ошибка произошла', e)
    }
}
