import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {Cup} from './allcups.jsx';





const firstComponent=new Cup(6);




ReactDOM.render(
      firstComponent.render(),
      document.getElementById('root')
    );








