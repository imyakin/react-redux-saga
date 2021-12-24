import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedPosts } from "../../store/posts/actions";
import { Loader } from "../Loader/Loader";
import { PostItem } from "../PostItem/PostItem";
import {selectLoadind} from "../../store/app/selector";

const FetchedPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(selectLoadind)

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