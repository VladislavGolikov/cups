import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from "react";
import '../styles/selection.scss';

import {SelectionYears} from './selectionyears.jsx'

const place=document.getElementById("root");

export const Selection=(props) => {

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

    return ReactDOM.createPortal(
      <form className={className} onAnimationEnd={animationEnd}>
        <SelectionYears/>
        <button className="show">показать</button>
        <button className="reset">сброс</button>
        <button className="turn-left">все вдруг влево</button>
        <button className="turn-right">все вдруг вправо</button>
      </form>, place
     );
};

