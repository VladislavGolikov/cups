import React from 'react';

import {Cup} from './cup.jsx';

import allcups from '../data_source/allcups.json';



export const AllCups=() => {
    const padding=1;
    const columns=allcups.cups.reduce((prev,el,ind,arr)=>{
        const value=Math.abs((ind+1)/Math.ceil(arr.length/(1+ind))-window.innerWidth/window.innerHeight);
        if (prev[0]>value) {return [value,ind]}else{return prev};
    },[1000,0])[1];
    const rows=Math.ceil(allcups.cups.length/columns);
    const size=Math.min(Math.floor(window.innerHeight/rows)-padding*2,Math.floor(window.innerWidth/columns)-padding*2)

    return (
        <div className='cups' style={{
            gridTemplateRows: `repeat(${rows}, ${size}px)`,
            gridTemplateColumns: `repeat(${columns}, ${size}px)`,
            padding: `${padding}px`
        }}>
        {allcups.cups.map((el,ind)=>{return <Cup serial={ind} rows={rows} columns={columns} key={allcups.cups[ind][0]}></Cup>})}
        </div>
    )
}

