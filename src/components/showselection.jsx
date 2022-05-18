import React from 'react';
import {useState} from "react";
import classnames from "classnames";

import '../styles/showselection.scss';
import {Selection} from './selection.jsx';

export const ShowSelection=(props) => {

    let [buttonOn, setButtonOn]=useState(false);
    let [buttonInactively, setButtonInactively]=useState(false);

    return (
        <>
          <button className={classnames('show-selection', buttonInactively&&'out-of-service')}
          onClick={()=>{!buttonInactively&&setButtonOn(!buttonOn);setButtonInactively(true)}} >
          {!buttonOn&&'показать'}{buttonOn&&'скрыть'}
          </button>
          {((buttonOn)||(buttonInactively))&&(<Selection reset={()=>setButtonInactively(false)} buttonOn={buttonOn}/>)}
        </>
    );
};


