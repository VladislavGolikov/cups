import React from 'react';

import {Cup} from './cup.jsx';

import allcups from '../data_source/allcups.json';




export class AllCups extends React.Component {
    constructor(props) {
        super(props);
        alert(window.innerHeight/window.innerWidth)

        this.component=allcups.cups.map((el,ind)=>{return <Cup serial={ind} key={allcups.cups[ind][0]}></Cup>})



    }

    render() {
        return <div className='cups'>{this.component}</div>
    }


}


