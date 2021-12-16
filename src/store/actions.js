import {
    ADD_POST,
    DECREMENT,
    DECREMENT_2,
    HIDE_ALERT,
    HIDE_LOADER,
    INCREMENT,
    INCREMENT_2,
    REQUEST_POST,
    SHOW_ALERT,
    SHOW_LOADER
} from "./types";

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


export function addPost(obj){
    return ({
        type: ADD_POST,
        payload: obj
    })
}

export function fetchedPosts(){
    return {
        type: REQUEST_POST
    }
    
    // return async dispatch => {
    //     try{
    //         dispatch(showLoader())
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //         const json = await response.json()
    //         setTimeout(()=>{
    //             dispatch({
    //                 type: FETCH_POST,
    //                 payload: json
    //             })
    //             dispatch(hideLoader())
    //         }, 1000)
    //     } catch (e){
    //         console.error(e)
    //     }
    // }
}

export function showLoader() {
    return ({
        type: SHOW_LOADER
    })
}

export function hideLoader() {
    return ({
        type: HIDE_LOADER
    })
}

export function showAlert(text) {
    return dispatch => { dispatch({
        type: SHOW_ALERT,
        payload: text
    })
    setTimeout(()=>{
        dispatch(hideAlert())
    }, 3000)
    }
}

export function hideAlert() {
    return ({
        type: HIDE_ALERT,
    })
}