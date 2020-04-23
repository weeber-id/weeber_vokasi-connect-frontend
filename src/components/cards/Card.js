import React from 'react';



const Card = ({picture,event,desc}) => {
    return (
    <div>
        <img src={picture}/>
        <div>
        <h2>{event}</h2>
        <p>{desc}</p>
    </div>
    </div>
    );
};

export default Card;