import project_json from './config/product'
import React from 'react'
import ReactDOM from 'react-dom'

// preload
const preloadPage = document.querySelector('#preload-page');
const indexPage   = document.querySelector('#index-page');
window.onload = () => {
    preloadPage.addEventListener("animationend", (e) => {
        if (e.animationName === 'fadeout') {
            preloadPage.remove();
            indexPage.style.display = 'block';
        }
    });
};

// normal
const indexBtn = document.querySelector("#index-button");
const profileSwitch = document.querySelector(".profile-switch");
const profilePage = document.querySelector("#profile-page");

indexBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (indexBtn.getAttribute('data-state') === 'true') {
        indexBtn.setAttribute('data-state', 'false');
        profileSwitch.setAttribute('data-state', 'true');
        profilePage.style.display = 'block';
    }
    else {
        indexBtn.setAttribute('data-state', 'true');
        profileSwitch.setAttribute('data-state', 'false');
        profilePage.style.display = 'none';
    }
});

// render
const footer = <span>©{(new Date()).getFullYear()} Cyris. All rights reserved.</span>;
ReactDOM.render(footer, document.querySelector('.footer'));

const project = project_json.map(el =>
    <a href={el.link} key={el.id} target="_blank" rel="noopener noreferrer">
        <img src={el.thumb} alt={el.title} />
        <h4>{el.title}</h4>
        <p>{el.intro}</p>
        <time>{el.time}</time>
    </a>
);
ReactDOM.render(project, document.querySelector('.project'));

// console
console.log("> 『 绿生的幻想乡 』");
console.log(">  Cyris's design portfolio v2.");
