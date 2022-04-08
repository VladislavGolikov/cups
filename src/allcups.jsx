import React from 'react';

import cups from './allcups.json';


let bebe=1;


export class Cup extends React.Component {
    constructor(props) {
        super(props);
        this.filePath=`cups.cups[0][0]`;
        this.state= {};
        this.cupName=cups.cups[0][1];
    }

render() {
    return <div className="cup" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${bebe}.png)`}}>

    {this.cupName}</div>;
  }



}


