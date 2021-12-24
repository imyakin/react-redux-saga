import React from "react";
import { useSelector } from "react-redux";
import { PostItem } from "../PostItem/PostItem";
import {selectPosts} from "../../store/posts/selectors";

const Posts = () => {
    const posts = useSelector(selectPosts)
    
    return posts.map(post => <PostItem post={post} key={post.id}/>)
}

export default Posts