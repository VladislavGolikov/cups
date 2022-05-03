import React from 'react';

import {Cup} from './cup.jsx';

import allcups from '../data_source/allcups.json';

// alert(window.innerHeight/window.innerWidth)

export const AllCups=() => {
    return (
        <div className='cups'>
        {allcups.cups.map((el,ind)=>{return <Cup serial={ind} key={allcups.cups[ind][0]}></Cup>})}
        </div>
    )
}