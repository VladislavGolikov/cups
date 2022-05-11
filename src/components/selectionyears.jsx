import React from 'react';
import {useState} from "react";
import '../styles/selectionyears.scss';
import allcups from '../data_source/allcups.json';

const allYears=allcups.cups.map((el)=>{return 2000+Number(el[0].slice(0,2))});

export const SelectionYears=(props) => {
    let [valueMin, setStateMin]=useState(Math.min(...allYears));
    let [valueMax, setStateMax]=useState(Math.max(...allYears));
    let [valueRange, setStateRange]=useState(`Год: ${valueMin} - ${valueMax}`);

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


    return (
        <>
          <input className="year-min" type="range" id="year-min" name="year-min" min={Math.min(...allYears)} max={Math.max(...allYears)} step="1"
            onChange={()=>changeValues(false)} value={valueMin} />
          <input className="year-max" type="range" id="year-max" name="year-max" min={Math.min(...allYears)} max={Math.max(...allYears)}  step="1"
            onChange={()=>changeValues(true)} value={valueMax} />

          <label htmlFor="year-min" className="year-label">{valueRange}</label>
          <label htmlFor="year-max" className="year-label">{valueRange}</label>
        </>
     );
};

