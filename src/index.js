import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import {AllCups} from './components/allcups.jsx';

const root=ReactDOM.createRoot(document.getElementById("root"));


const mainComponent=<AllCups></AllCups>;

root.render(mainComponent);








