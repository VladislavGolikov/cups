import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {Cup} from './allcups.jsx';

import cups from './allcups.json';


alert(new Cup(cups.cups[0]))


let vava=new Cup(cups.cups[0]);

/*alert(Object.entries(vava.render().props))*/
//const vava=`первая проба...`


ReactDOM.render(
      vava.render(),
      document.getElementById('root')
    );








