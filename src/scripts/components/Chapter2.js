import React, { useContext } from 'react'
import OpenChapter from './OpenChapter'
import { Context } from "../store/menu"
import open from "../actions/opening"

export default function Chapter1() {
    const { store, dispatch } = useContext(Context)

    const nextChapter = open("LastChapter")

    return (
        <div id='chapter2'>
            <OpenChapter chapter={ store.chapter } />
            <div className="chapter2-open">
                <div /><div /><div /><div />
            </div>
            <div className="chapter2-claws">
                <div className="left">
                    <div /><div /><div /><div /><div /><div /><div />
                </div>
                <div className="right">
                    <div /><div /><div /><div /><div /><div /><div />
                </div>
            </div>
            <div className="chapter2-night-fall">
                <div /><div /><div />
            </div>
            <div className="chapter2-stage">
                <div className="corners corner-1">
                    <div className="inside-bg">
                        <div /><div /><div />
                    </div>
                    <div className="inside-squ">
                        <div /><div /><div />
                    </div>
                </div>
                <div className="corners corner-2">
                    <div className="inside-bg">
                        <div /><div /><div />
                    </div>
                    <div className="inside-squ">
                        <div /><div /><div />
                    </div>
                </div>
                <div className="corners corner-3">
                    <div className="inside-bg">
                        <div /><div /><div />
                    </div>
                    <div className="inside-squ">
                        <div /><div /><div />
                    </div>
                </div>
                <div className="corners corner-4">
                    <div className="inside-bg">
                        <div /><div /><div />
                    </div>
                    <div className="inside-squ">
                        <div /><div /><div />
                    </div>
                </div>
                <div className="lines">
                    <div /><div /><div /><div />
                </div>
                <div className="center" />
                <div className="actress" />
            </div>
            <div className="chapter2-close">
                <div className="groups group-1">
                    <div /><div />
                </div>
                <div className="groups group-2">
                    <div /><div />
                </div>
                <div className="groups group-3">
                    <div /><div onAnimationEnd={() => dispatch({ type: "changeChapter", payload: nextChapter })} />
                </div>
            </div>
        </div>
    )
}