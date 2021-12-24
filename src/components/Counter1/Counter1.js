import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from "../../store/counters/actions";
import {selectCounter1} from "../../store/counters/selectors";


export const Counter1 = () => {
    const counter = useSelector(selectCounter1)
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