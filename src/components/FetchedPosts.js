import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedPosts } from "../store/actions";
import { Loader } from "./Loader";
import { PostItem } from "./PostItem";

const FetchedPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    if(loading){
        return <Loader/>
    }
    if(!posts.length){
        return <button 
            className="btn btn-primary"
            onClick={()=>dispatch(fetchedPosts())}
            >Загрузить посты</button>
    }
    
    return posts.map(post => <PostItem post={post} key={post.id}/>)
}

export default FetchedPosts