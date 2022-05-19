import React from 'react';
import {useState,useContext} from "react";
import '../styles/allcups.scss';

import {Cup} from './cup.jsx';
import allcups from '../data_source/allcups.json';

import {context} from './main.jsx';

export const AllCups=(props) => {






    let [innerWidth, setInnerWidth]=useState(window.innerWidth);
    let [innerHeight, setInnerHeight]=useState(window.innerHeight);
    window.addEventListener('resize',()=>{ /* динамическая перестройка макета при изменении окна */
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight)
    });

    let resultingArray=[]; /* фильтрация всего массива по условиям выборки */
    allcups.cups.forEach((el,ind)=>{
        const year=2000+Number(el[0].slice(0,2));
        if ((el[0]==props.id||props.id===true)&&(el[1]==props.title||props.title===true)&&
            (el[2]==props.color||props.color===true)&&(el[3]==props.material||props.material===true)&&
            (year==props.year||props.year===true)&&(el[5]==props.source||props.source===true)&&
            (el[6]==props.land||props.land===true)&&(el[7]==props.place||props.place===true)) {
            resultingArray.push(ind)
        }
    });

    const padding=5; /* сделано для grid-gap 5px */
    const coefFontSize=0.06; /* подобрано наобум */
    let columns,rows,size=0;
    for (let i=1;i<=resultingArray.length;i++) { /* расчет оптимального размера, строк и столбцов */
        const currentColumns=i;
        const currentRows=Math.ceil(resultingArray.length/currentColumns);
        const currentSize=Math.floor(Math.min(innerWidth/currentColumns-padding,innerHeight/currentRows-padding));
        if (currentSize>size) {size=currentSize;columns=currentColumns;rows=currentRows}
    }


    return (
        <>
        <div className='cups' style={{
            gridTemplateRows: `repeat(${rows}, ${size}px)`,
            gridTemplateColumns: `repeat(${columns}, ${size}px)`,
            fontSize: `${size*coefFontSize}px`
        }}>
        {resultingArray.map((el,ind)=>{return <Cup index={el} orderBy={ind} rows={rows} columns={columns} key={allcups.cups[el][0]}></Cup>})}
        </div>
        <context.Consumer>
        {value => value}
        </context.Consumer>
        </>
    )
}

