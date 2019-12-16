import React from 'react';
import SportSummary from './SportSummary';
import { Link } from 'react-router-dom';

const SportList = ({sports}) => {
    return(
        <div className='sport-list section'>
            {sports && sports.map(sport => {
                return (
                    <Link to={'/sport/' + sport.id} key={sport.id}>
                        <SportSummary sport={sport} />
                    </Link>
                )
            })}
        </div>
    )
}

export default SportList;