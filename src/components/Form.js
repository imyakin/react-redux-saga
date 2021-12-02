import React, {useRef, useState} from "react";

const Form = () => {
   const  [name, setName] = useState("");
   const  [surname, setSurname] = useState("");
   const nameInputRef = useRef()
   const surnameInputRef = useRef()

    const handlerSurname = (e) => {
       if(e.key === 'Enter'){
           surnameInputRef.current.focus()
       }
    }
    const handlerName = (e) => {
       if(e.key === 'Enter'){
           nameInputRef.current.focus()
       }
    }

    return (
        <form>
            <input
                ref={nameInputRef}
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyUp={handlerSurname}
            />
            <input
                ref={surnameInputRef}
                type="text"
                placeholder="Фамилия"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                onKeyUp={handlerName}
            />
        </form>
    )
}

export default Form;