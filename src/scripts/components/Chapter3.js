import React, { useContext } from 'react'
import OpenChapter from './OpenChapter'
import { Context } from "../store/menu"
import open from "../actions/opening"

export default function Chapter1() {
    const { store, dispatch } = useContext(Context)

    const nextChapter = open("LastChapter")

    return (
        <div id='chapter3'  onAnimationEnd={(e) => {
            if (e && e.target && e.target.id && e.target.id === 'chapter3') {
                dispatch({ type: "changeChapter", payload: nextChapter })
            } 
        }}>
            <OpenChapter chapter={ store.chapter } />
            <div className="chapter3-sunny">
                <div className="chapter3-sunny__in">
                    <div></div><div></div><div></div><div></div><div></div>
                </div>
                <div className="chapter3-sunny__cards">
                    <section className="part-1">
                        <div></div><div></div>
                    </section>
                    <section className="part-2">
                        <span></span>
                        <div></div><div></div>
                    </section>
                    <section className="part-3">
                        <div></div><div></div>
                    </section>
                </div>
                <div className="chapter3-sunny__lights">
                    <section className="part-1">
                      <div></div><div></div><div></div><div></div>
                      <div></div><div></div><div></div><div></div>
                      <div></div><div></div><div></div><div></div>
                    </section>
                    <section className="part-2">
                      <div></div><div></div><div></div><div></div>
                      <div></div><div></div><div></div><div></div>
                      <div></div><div></div><div></div><div></div>
                    </section>
                </div>
            </div>
            <div className="chapter3-shiny-wrap">
                <div className="chapter3-shiny-box">
                    <div className="chapter3-shiny-item"></div>
                </div>
            </div>
        </div>
    )
}