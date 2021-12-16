import React, {useEffect, useRef, useState} from "react";

export const Counter3 = () => {
    const [counter, setCounter] = useState()
    const ref = useRef()

    useEffect(()=>{
        ref.current = 0
    }, [])

    return (
        <>
            <p>Counter: {counter}</p>
            <button
                type="button"
                className="btn btn-success"
                onClick={()=>ref.current++}
            >
                Increment
            </button>
            <button
                type="button"
                className="btn btn-warning"
                onClick={()=>setCounter(ref.current)}
            >
                Update
            </button>
        </>
    )
}