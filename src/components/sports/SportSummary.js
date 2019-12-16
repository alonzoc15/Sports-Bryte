import React from 'react';
import moment from 'moment';

const SportSummary = ({sport}) => {
    return (
        <div className='card z-depth-0 project-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{sport.title}</span>
                <p>Posted by {sport.authorFirstName} {sport.authorLastName}</p>
                <p className='grey-text'>{moment(sport.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
    )
}

export default SportSummary;