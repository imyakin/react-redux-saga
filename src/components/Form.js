import React, {useRef} from "react";

const Form = ({handleAddToForm, handleSubmit}) => {

   const nameInputRef = useRef()
   const surnameInputRef = useRef()

    const handlerSurname = (e) => {
       if(e.key === 'space'){
           surnameInputRef.current.focus()
       }
    }
    const handlerName = (e) => {
       if(e.key === 'space'){
           nameInputRef.current.focus()
       }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={nameInputRef}
                type="text"
                placeholder="Имя"
                name="firstname"
                onChange={handleAddToForm}
                onKeyUp={handlerSurname}
            />
            <input
                className="mt-1"
                ref={surnameInputRef}
                type="text"
                placeholder="Фамилия"
                name="lastname"
                onChange={handleAddToForm}
                onKeyUp={handlerName}
            />
            <button type="submit" className="mt-2 btn btn-info ">Submit</button>
            <button type="reset" className="mt-2 btn btn-danger">Reset</button>
        </form>
    )
}

export default Form;