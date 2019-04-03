import React, { useContext } from 'react'
import { Context } from "../store/menu";

export default function ProfileSwitch() {
    const { store } = useContext(Context)

    return (
        <div id="profile-switch" data-state={ store.dataState }>
            <span /><span /><span />
        </div>
    )
}