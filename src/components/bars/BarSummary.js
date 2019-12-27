import React from 'react';
import moment from 'moment';

const BarSummary = ({bar}) => {
    return (
        <div className='card z-depth-0 bar-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{bar.title}</span>
                <p>Click for more detail</p>
            </div>
        </div>
    )
}

export default BarSummary;