import React from 'react'
import SeriesData from '../Api/SeriesData.json';
import { SeriesCard } from './SeriesCard';



export const NetflixSeries = () => {
    return (
        <ul className='grid grid-three--cols'>
            {SeriesData.map((currElem) => (
                <SeriesCard key={currElem.id} data={currElem} />
            ))}
        </ul>
    )
}

export default NetflixSeries;

