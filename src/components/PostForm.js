import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, showAlert } from "../store/actions";
import { Alert } from "./Alert";

const PostForm = () => {
    const [title, setTitle] = useState('')
    const alert = useSelector(state => state.app.alert)
    console.log(alert)
    const dispatch = useDispatch()

   const submitHandler = event =>{
       event.preventDefault()
       if(!title.trim()){
           return dispatch(showAlert('Вы ничего не написали'))
       }

       const newPost = {
           title, id: Date.now().toString()
       }
       dispatch(addPost(newPost))
       setTitle('')
   }

    return (
        <form onSubmit = {submitHandler}>
        {alert && <Alert text={alert}/>}
        <div className="mb-3 mt-3">
            <label htmlFor="title" className="form-label">Напишите пост</label>
            <input 
            type="text" 
            className="form-control" 
            id="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-2">Добавить</button>
        </div>
        </form>
    )
}

export default PostForm