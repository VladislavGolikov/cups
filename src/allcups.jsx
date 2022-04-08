import React from 'react';

import cups from './allcups.json';

/*cltkfnm расшифровку массива описания чтобы обращаться по имени сущности!*/
let bebe=1;


export class Cup extends React.Component {
    constructor(props) {
        super(props);
        this.filePath=cups.cups[0][8];

        this.state= {};
        this.cupName=cups.cups[0][1];
    }

render() {
    return <div className="cup" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${this.filePath}2.png)`}}>

    {this.cupName}</div>;
  }



}


