import React, {useContext} from 'react'
import OpenChapter from './OpenChapter'
import { Context } from "../store/menu"
import open from "../actions/opening"

export default function Chapter1() {
    const { store, dispatch } = useContext(Context)

    const nextChapter = open("LastChapter")

    return (
        <div id='chapter1'>
            <OpenChapter chapter={ store.chapter } />
            <div className="chapter1-open">
                <div /><div /><div />
            </div>
            <div className="chapter1-effects">
                <div className="chapter1-effects-outside">
                    <div className="lines">
                        <div /><div /><div /><div />
                    </div>
                    <div className="points">
                        <div /><div /><div /><div />
                    </div>
                </div>
                <div className="chapter1-effects-inside">
                    <div /><div />
                </div>
            </div>
            <div className="chapter1-close" onAnimationEnd={() => dispatch({ type: "changeChapter", payload: nextChapter })} />
        </div>
    )
}