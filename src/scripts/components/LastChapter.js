import React from 'react'
import HomePage from './Home'
import ProfileSwitch from './ProfileSwitch'
import ProfilePage from './Profile'

export default function LastChapter() {
    return (
        <div id='gensokyo'>
            <HomePage />
            <ProfileSwitch />
            <ProfilePage />
        </div>
    )
}