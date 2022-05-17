import React from 'react';
import {useState} from "react";

import {AllCups} from './allcups.jsx';
import {ShowSelection} from './showselection.jsx';

export const Main=(props) => {
    let [id, setId]=useState(true);
    let [title, setTitle]=useState(true);
    let [color, setColor]=useState(true);
    let [material, setMaterial]=useState(true);
    let [year, setYear]=useState(true);
    let [source, setSource]=useState(true);
    let [land, setLand]=useState(true);
    let [place, setPlace]=useState(true); /* по умолчанию покажем всех! */


    return (
        <>
          <AllCups id={id} title={title} color={color} material={material} year={year} source={source} land={land} place={place}></AllCups>
          <ShowSelection></ShowSelection>
        </>
    );
};







