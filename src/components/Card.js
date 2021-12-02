import React from "react";

export const Card = (props) => {
   return ( 
   <div className="row mt-2" style={{boxShadow: '4px 4px 10px rgba(0,0,0, 0.25)', width: '300px', padding: '10px'}}>
        <div className="col">
            {props.children}
        </div>
    </div>)
}