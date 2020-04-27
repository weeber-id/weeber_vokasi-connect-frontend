import React from 'react';
import './documentation.styles.scss';

const Documentation = ({id,imgUrl}) => {
    return(
        <div className="documentation-section">
            <img className="documentation-img" alt= "" src={imgUrl}/>
        </div>
    );
};

export default Documentation;