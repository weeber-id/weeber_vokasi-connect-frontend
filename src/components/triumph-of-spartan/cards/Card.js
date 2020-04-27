import React from 'react';

import './cardtest.scss';

const Card = ({picture,event,desc}) => {
    return (
    <div >
        <div className='column'>
            <div className='card'>
            <img alt="" src={picture} className="img-fluid"/>
            <h2>{event}</h2>
            <p className="card-desc">{desc}</p>
            </div>
        </div>
    </div>
    );
};

export default Card;