import React from 'react';

import {Cup} from './cup.jsx';
import allcups from '../data_source/allcups.json';

export const AllCups=(props) => {

    const resultingArray=[];
    allcups.cups.forEach((el,ind)=>{
    if ((el[0]==props.id||props.id===true)&&(el[1]==props.title||props.title===true)&&
        (el[2]==props.color||props.color===true)&&(el[3]==props.material||props.material===true)&&
        (el[4]==props.date||props.date===true)&&(el[5]==props.source||props.source===true)&&
        (el[6]==props.land||props.land===true)&&(el[7]==props.place||props.place===true))
        resultingArray.push(ind)
        });

    const padding=1;
    const columns=resultingArray.reduce((prev,el,ind,arr)=>{
        const value=Math.abs((ind+1)/Math.ceil(arr.length/(1+ind))-window.innerWidth/window.innerHeight);
        if (prev[0]>value) {return [value,ind]}else{return prev};
    },[1000,0])[1]; /* рассчитываем чтобы соотношение столбцов и строк вышло наиболее близким к отношению ширины/высоты экрана */
    const rows=Math.ceil(resultingArray.length/columns);
    const size=Math.min(Math.floor(window.innerHeight/rows)-padding*2,Math.floor(window.innerWidth/columns)-padding*2);

    return (
        <div className='cups' style={{
            gridTemplateRows: `repeat(${rows}, ${size}px)`,
            gridTemplateColumns: `repeat(${columns}, ${size}px)`,
            padding: `${padding}px`
        }}>
        {resultingArray.map((el,ind)=>{return <Cup index={el} orderBy={ind} rows={rows} columns={columns} key={allcups.cups[el][0]}></Cup>})}
        </div>
    )
}

