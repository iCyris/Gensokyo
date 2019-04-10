import React, {useContext} from 'react'
import { Context } from "../store/menu"
import open from "../actions/opening"

export default function Prologue() {
    const { dispatch } = useContext(Context)

    const nextChapter = open("LastChapter")
    const lastChapter = {
        name: "LastChapter",
        description: "Main Land"
    }

    return (
        <div id="prologue">
            <div className="prologue-bg">
                <div /><div />
            </div>
            <div className="prologue-frame">
                <div>
                    <span /><span /><span />
                </div>
                <div>
                    <span /><span /><span />
                </div>
            </div>
            <div className="prologue-stage">
                <div className="prologue-stage-curtain">
                    <div /><div />
                </div>
                <div className="prologue-stage-title">
                    <div /><div />
                </div>
            </div>
            <div className="prologue-cover">
                <div /><div /><div /><div  />
            </div>
            <div className="prologue-wave" />
            <div className="prologue-logo" />
            <div className="prologue-out">
                <div /><div /><div /><div onAnimationEnd={() => dispatch({ type: "changeChapter", payload: nextChapter })} />
            </div>
            <div className="prologue-skip" onClick={() => dispatch({ type: "changeChapter", payload: lastChapter })} />
        </div>
    )
}