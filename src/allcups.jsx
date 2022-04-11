import React from 'react';

import allcups from './allcups.json';



export class Cup extends React.Component {
    constructor(props) {
        super(props);
        /* в соответствии с полями как в allcups.fields: */
        this.id=allcups.cups[props][0];
        this.title=allcups.cups[props][1];
        this.color=allcups.cups[props][2];
        this.material=allcups.cups[props][3];
        this.date=allcups.cups[props][4];
        this.source=allcups.cups[props][5];
        this.land=allcups.cups[props][6];
        this.place=allcups.cups[props][7];
        this.fileName=allcups.cups[props][8];

        this.fileFrames=['1.png','2.png','3.png','4.png'];


        this.state= {};

    }

    render() {
        let filePath=`${process.env.PUBLIC_URL}/${this.fileName}${this.fileFrames[0]}`;
        return <div className="cup">
                <div className="id">{'№ '+this.id}</div>
                <div className="title">{this.title}</div>
                <div className="material">{this.material}</div>
                <div className="date">{this.date}</div>
                <div className="land">{this.land}</div>
                <div className="place">{this.place}</div>
                <div className="picture" style={{backgroundImage: `url(${filePath})`}}></div>
               </div>;
    }



}


