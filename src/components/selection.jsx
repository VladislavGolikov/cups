import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from "react";

import '../styles/selection.scss';
import allcups from '../data_source/allcups.json';

const allYears=allcups.cups.map((el)=>{return 2000+Number(el[0].slice(0,2))});

const place=document.getElementById("root");


export const Selection=(props) => {
    let [valueMin, setStateMin]=useState(Math.min(...allYears));
    let [valueMax, setStateMax]=useState(Math.max(...allYears));
    let [valueRange, setStateRange]=useState(`Год: ${valueMin} - ${valueMax}`);

    let [expand, setStateExpand]=useState(false);
    let [shrink, setStateShrink]=useState(false);
    let [active, setStateActive]=useState(props.active);
    let [className, setStateСlassName]=useState('select');

    if (active!=props.active&&!expand&&!shrink) {
        setStateActive(props.active);
        if (props.active) {
            setStateExpand(true);
            setStateСlassName('select enter');
        }else{
            setStateShrink(true);
            setStateСlassName('select exit');
        }
    };

    function animationEnd() {
        setStateСlassName('select');
        setStateExpand(false);
        setStateShrink(false);
    }

    if (!active&&!expand&&!shrink) {return null}


    function changeValues(forward) {
        if (forward) {
            setStateMax(event.target.value);
            if (valueMin>=event.target.value) {
                setStateMin(event.target.value);
                setStateRange(`Год: ${event.target.value}`)
            }else{
                setStateRange(`Год: ${valueMin} - ${event.target.value}`)}
        }else{
            setStateMin(event.target.value);
            if (valueMax<=event.target.value) {
                setStateMax(event.target.value);
                setStateRange(`Год: ${event.target.value}`)
            }else{
                setStateRange(`Год: ${event.target.value} - ${valueMax}`)
            }
        }
    }


    return ReactDOM.createPortal(
      <form className={className} onAnimationEnd={animationEnd}>
      <input className="year1" type="range" id="year1" name="year1" min={Math.min(...allYears)} max={Math.max(...allYears)} step="1"
        onChange={()=>changeValues(false)} value={valueMin} />
      <input className="year2" type="range" id="year2" name="year2" min={Math.min(...allYears)} max={Math.max(...allYears)}  step="1"
        onChange={()=>changeValues(true)} value={valueMax} />

        <label htmlFor="year1" className="year-label">{valueRange}</label>

        <button className="show">показать</button>
        <button className="reset">сброс</button>
        <button className="turn-left">все вдруг влево</button>
        <button className="turn-right">все вдруг вправо</button>
      </form>, place
     );
};

