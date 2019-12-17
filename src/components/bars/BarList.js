import React from 'react';
import BarSummary from './BarSummary';
import { Link } from 'react-router-dom';

const BarList = ({bars}) => {
    return(
        <div className='bar-list section'>
            {bars && bars.map(bar => {
                return (
                    <Link to={'/bar/' + bar.id} key={bar.id}>
                        <BarSummary bar={bar} />
                    </Link>
                )
            })}
        </div>
    )
}

export default BarList;