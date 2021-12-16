import React from "react";
import style from './Card.module.css'

export const Card = (props) => {
   return ( 
   <div className="row mt-2" style={style.card}>
        <div className="col">
            {props.children}
        </div>
    </div>)
}