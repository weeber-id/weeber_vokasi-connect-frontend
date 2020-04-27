import React from 'react';


const CardProdi = ({id,title,svgUrl}) => {
    return (
    <div >
        <div className='column'>
            <div className='card'>
            <img alt="" src={svgUrl}/>
            <h2>{title}</h2>
            </div>
        </div>
    </div>
    );
};

export default CardProdi;