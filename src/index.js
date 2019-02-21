import './index.scss';
import './scripts/app.js'
import React from 'react'
import ReactDOM from 'react-dom'

const element = <span>©{(new Date()).getFullYear()} Cyris. All rights reserved.</span>;
ReactDOM.render(element, document.querySelector('.footer'));