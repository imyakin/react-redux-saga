import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/actions";

export const Counter1 = () => {
    const counter = useSelector(state => state.counter.counter)
    const dispatch = useDispatch()

    return (
        <>
            <p>Counter: {counter}</p>
            <button 
                type="button" 
                className="btn btn-success"
                onClick={()=>dispatch(increment())}
            >
            Increment
            </button>
            <button 
                type="button"
                className="btn btn-warning"
                onClick={()=>dispatch(decrement())}
            >
            Decrement
            </button>
        </>
    )
}