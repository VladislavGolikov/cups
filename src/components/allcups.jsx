import React from 'react';

import {Cup} from './cup.jsx';

import allcups from '../data_source/allcups.json';



export const AllCups=(props) => {/*"id","title","color","material","date","source","land","place","fileName"*/


const resultingArray=allcups.cups.filter((el)=>
    el[0]==props.id||true&& /* заглушка на проверку по... */
    el[1]==props.title||true&& /* заглушка на проверку по... */
    el[2]==props.color||true&& /* заглушка на проверку по... */
    el[3]==props.material||true&& /* заглушка на проверку по... */
    el[4]==props.date||true&& /* заглушка на проверку по... */
    el[5]==props.source||true&& /* заглушка на проверку по... */
    el[6]==props.land||true&& /* заглушка на проверку по... */
    el[7]==props.place||true /* заглушка на проверку по... */
    )






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
        {resultingArray.map((el,ind)=>{return <Cup serial={ind} rows={rows} columns={columns} key={resultingArray[ind][0]}></Cup>})}
        </div>
    )
}

