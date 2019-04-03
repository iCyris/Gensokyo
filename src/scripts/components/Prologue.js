import React, {useContext} from 'react'
import { Context } from "../store/menu";

export default function Prologue() {
    const { dispatch } = useContext(Context)
    const chapter = {
        name: 'LastChapter',
        description: 'LastChapter'
    }

    return (
        <div id="prologue" onAnimationEnd={() => dispatch({ type: "changeChapter", payload: chapter })}>
            <div className="prologue-bg">
                <div /><div />
            </div>
        </div>
    )
}