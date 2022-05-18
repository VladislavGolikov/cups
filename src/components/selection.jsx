import React from 'react';
import ReactDOM from 'react-dom';
import classnames from "classnames";

import {useState,useContext,useEffect} from "react";
import '../styles/selection.scss';

import {SelectionYears} from './selectionyears.jsx';
import {context} from './main.jsx';

const place=document.getElementById("root");


export const Selection=(props) => {






    let yearMin=0;
    let yearMax=0;
    function getYears(min,max) {
        yearMin=min;
        yearMax=max;
        console.log(yearMin, yearMax)
    }




    return ReactDOM.createPortal(
      <form className={classnames('select','enter',!(props.buttonOn)&&'exit')} onAnimationEnd={()=>props.reset()}>
        <SelectionYears setYears={getYears} />
        <button className="show">показать</button>
        <button className="reset">сброс</button>
        <button className="turn-left">все вдруг влево</button>
        <button className="turn-right">все вдруг вправо</button>
      </form>, place
     );
};

