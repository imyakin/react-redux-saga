import React from "react";
import { useSelector } from "react-redux";
import { PostItem } from "./PostItem";

const Posts = () => {
    const posts = useSelector(state => state.posts.posts)
    
    return posts.map(post => <PostItem post={post} key={post.id}/>)
}

export default Posts