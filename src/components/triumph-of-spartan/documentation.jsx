import React from 'react';
import './documentation.styles.scss';

const Documentation = ({id,imgUrl}) => {
    return(
        <div className= "documentation">
            <div className = "documentation-column">
            <div className="documentation-card">
                <img className="documentation-img-fluid" alt= "" src={imgUrl}/>
            </div>
        </div>
        </div>
        
    );
};

export default Documentation;