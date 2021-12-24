import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../store/posts/actions";
import { Alert } from "../Alert/Alert";
import {selectAlert} from "../../store/app/selector";

const PostForm = ({subUser}) => {
    const [title, setTitle] = useState('')
    const alert = useSelector(selectAlert)
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
            {subUser.length > 0 ? subUser.map(user => <label key={user.name} htmlFor="title" className="form-label">{user.name} {user.surname}, напишите пост</label>)
                : <label htmlFor="title" className="form-label">Гость, напишите пост</label>}

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