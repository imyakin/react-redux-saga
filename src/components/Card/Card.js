import React from "react";

const card = {
    boxShadow: '4px 4px 10px rgba(0,0,0, 0.25)',
    maxWidth: '20%',
    padding: '10px',
}

export const Card = (props) => {
   return (<div className="row mt-2">
        <div className="col" style={card}>
            {props.children}
        </div>
    </div>)
}