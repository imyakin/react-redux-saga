import * as types from "../types"

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case types.FETCH_POST:
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
}