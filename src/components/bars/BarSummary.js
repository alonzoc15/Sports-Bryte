import React from 'react';
import moment from 'moment';

const BarSummary = ({bar}) => {
    return (
        <div className='card z-depth-0 bar-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{bar.title}</span>
                <p>Posted by {bar.authorFirstName} {bar.authorLastName}</p>
                <p className='grey-text'>{moment(bar.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
    )
}

export default BarSummary;