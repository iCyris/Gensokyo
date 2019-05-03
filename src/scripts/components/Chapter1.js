import React, { useContext } from 'react'
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
            <div className="chapter1-radio">
                <div className="chapter1-radio-start" />
            </div>
            <div className="chapter1-night">
                <div />
            </div>
            <div className="chapter1-cards">
                <div className="group-1">
                    <div />
                </div>
                <div className="group-2">
                    <div /><div /><div /><div />
                </div>
                <div className="group-3">
                    <div className="part-1">
                        <div /><div /><div /><div /><div /><div /><div /><div />
                    </div>
                    <div className="part-2">
                        <div /><div /><div /><div /><div /><div /><div /><div />
                    </div>
                </div>
                <div className="group-4">
                    <div /><div />
                </div>
            </div>
            <div className="chapter1-kurukuru">
                <div className="line-wrapper">
                    <div className="line" />
                </div>
                <div className="line-wrapper">
                    <div className="line" />
                </div>
                <div className="line-wrapper">
                    <div className="line" />
                </div>
                <div className="line-wrapper">
                    <div className="line" />
                </div>
                <div className="line-wrapper">
                    <div className="line" />
                </div>
                <div className="line-wrapper">
                    <div className="line" />
                </div>
                <div className="line-wrapper">
                    <div className="line" />
                </div>
                <div className="line-wrapper">
                    <div className="line" />
                </div>
            </div>
            <div className="chapter1-close">
                <div />
                <div onAnimationEnd={() => dispatch({ type: "changeChapter", payload: nextChapter })} />
            </div>
        </div>
    )
}