import React, {useContext} from 'react'
import OpenChapter from './OpenChapter'
import { Context } from "../store/menu";

export default function Chapter1() {
    const { store, dispatch } = useContext(Context)

    const nextChapter = {
        id: "LastChapter",
        name: "LastChapter",
        description: "LastChapter"
    }

    return (
        <div id='chapter1'>
            <OpenChapter chapter={ store.chapter } />
            <div className="chapter1-close" onAnimationEnd={() => dispatch({ type: "changeChapter", payload: nextChapter })} />
        </div>
    )
}