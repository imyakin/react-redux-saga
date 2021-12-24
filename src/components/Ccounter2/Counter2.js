import React from "react";
import { connect } from "react-redux";
import {decrement2, increment2} from "../../store/counters/actions";

const Counter2 = ({counter2, increment, decrement}) => {
    return (
        <>
            <p>Counter:{counter2}</p>
            <button 
                type="button" 
                className="btn btn-primary"
                onClick = {()=>increment()}
            >
            Increment
            </button>
            <button 
                type="button"
                className="btn btn-secondary"
                onClick = {()=>decrement()}
            >
            Decrement
            </button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        counter2: state.counter.counter2
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {
            dispatch(increment2(parseInt(prompt('Укажите цифру'))))
        },
        decrement: () => {
            dispatch(decrement2(parseInt(prompt('Укажите цифру'))))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)