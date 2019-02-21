// App.js

const indexBtn = document.querySelector("#index-button");
const profileSwitch = document.querySelector(".profile-switch");
const profilePage = document.querySelector("#profile-page");

indexBtn.addEventListener("click", function (e) {
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

console.log("> 『 绿生的幻想乡 』");
console.log(">  Cyris's design portfolio v2.");
console.log(">  State: Work in progress.");
