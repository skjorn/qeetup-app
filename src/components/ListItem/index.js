import React from 'react';
import './style.css';

export default (props) => {
    const { item } = props;
    const positive = item.delta > 0;
    const negative = item.delta < 0;
    let highlightClassName = '';
    if (negative) {
        highlightClassName = 'negative';
    }
    else if (positive) {
        highlightClassName = 'positive';
    }
    return (
        <div className={'list-group-item ' + highlightClassName}>
            <strong>{props.order}</strong>
            <strong>{item.name}</strong>
            <strong>{item.points}</strong>
            <strong>{positive ? '+' + item.delta : item.delta}</strong>
            <div onClick={() => { props.onRemove() }} className='delete-btn'>X</div>
        </div>
    );
};
