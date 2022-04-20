import React from 'react';

import allcups from '../data_source/allcups.json';



export class Cup extends React.Component {
    constructor(props) {
        super(props);
        /* в соответствии с полями как в allcups.fields: */
        this.id=allcups.cups[props.serial][0];
        this.title=allcups.cups[props.serial][1];
        this.color=allcups.cups[props.serial][2];
        this.material=allcups.cups[props.serial][3];
        this.date=allcups.cups[props.serial][4];
        this.source=allcups.cups[props.serial][5];
        this.land=allcups.cups[props.serial][6];
        this.place=allcups.cups[props.serial][7];
        this.fileName=allcups.cups[props.serial][8];

        this.fileFrames=['1.png','2.png','3.png','4.png'];

        this.state= {counter:0};

    }

    render() {
        let filePath=`${process.env.PUBLIC_URL}/${this.fileName}${this.fileFrames[this.state.counter]}`;
        return <div className="cup" onClick={this.counterPlus.bind(this)}>
                <div className="id">{'№ '+this.id}</div>
                <div className="title">{this.title}</div>
                <div className="material">{this.material}</div>
                <div className="date">{this.date}</div>
                <div className="land">{this.land}</div>
                <div className="place">{this.place}</div>
                <div className="picture" style={{backgroundImage: `url(${filePath})`}}></div>
               </div>;
    }

    counterPlus() {
        this.setState({counter : this.increase(this.state.counter)});
    }

    increase(value) {
        value++;
        if (value>=this.fileFrames.length) {value=0}
        return value;
    }
}


