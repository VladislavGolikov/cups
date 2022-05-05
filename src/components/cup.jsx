import React from 'react';
import {useState} from "react";
import allcups from '../data_source/allcups.json';


const fileFrames=['1.png','2.png','3.png','4.png'];

export const Cup=(props) => {
    let [value, setState]=useState(0);
    const [id,title,color,material,date,source,land,place,fileName]=allcups.cups[props.serial];
    let filePath=`${process.env.PUBLIC_URL}/${fileName}${fileFrames[value]}`;
    const left=(props.serial)%props.columns+1;
    const top=Math.ceil((props.serial+1)/props.columns);

    return (
        <div className="cup"
             onClick={()=>{setState(++value>=fileFrames.length ? 0 : value)}}
             style={{gridRow: `${top}`, gridColumn: `${left}`}}>

            <div className="id">{'№ '+id}</div>
            <div className="title">{title.toLowerCase()}</div>
            <div className="material">{material}</div>
            <div className="date">{date}</div>
            <div className="land">{land}</div>
            <div className="place">{place}</div>
            <div className="picture" style={{backgroundImage: `url(${filePath})`}} ></div>
        </div>
    );
};
