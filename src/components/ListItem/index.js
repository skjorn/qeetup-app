import React from 'react';
import './style.css';

export default (props) => {
    return (
        <div className='list-group-item'>
            <strong>{props.name}</strong>
            <div onClick={() => { props.onRemove() }} className='delete-btn'>X</div>
        </div>
    );
};
