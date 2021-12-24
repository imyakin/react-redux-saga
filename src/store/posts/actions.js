import * as types from '../types'



export function addPost(obj){
    return ({
        type: types.ADD_POST,
        payload: obj
    })
}

export function fetchedPosts(){
    return {
        type: types.REQUEST_POST
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