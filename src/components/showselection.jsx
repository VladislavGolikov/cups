import React from 'react';
import {useState} from "react";

import '../styles/showselection.scss';
import {Selection} from './selection.jsx';

export const ShowSelection=(props) => {
    let [active, setStateActive]=useState(false);

    return (
        <>
          <button className="show-selection" onClick={()=>setStateActive(!active)} >run&gun</button>
          <Selection active={active} />
        </>
    );
};


