import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './Home'
import ProfileSwitch from './ProfileSwitch'
import ProfilePage from './Profile'

function Gensokyo() {
    return (
        <div id='gensokyo'>
            <HomePage />
            <ProfileSwitch />
            <ProfilePage />
        </div>
    );
}

const element = <Gensokyo />;

ReactDOM.render(
    element,
    document.getElementById('root')
);