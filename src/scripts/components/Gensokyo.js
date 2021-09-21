import React, { useContext } from 'react'
import Prologue from './Prologue'
import Chapter1 from './Chapter1'
import Chapter2 from './Chapter2'
import Chapter3 from './Chapter3'
import LastChapter from './LastChapter'
import { Context } from "../store/menu"

export default function Gensokyo() {
    const { store } = useContext(Context)

    if (store.chapter.name === "Prologue") {
        // Console
        console.log("> 『 绿生的幻想乡 』")
        console.log(">  Cyris's design portfolio v2.")
    }

    switch (store.chapter.name) {
        case 'Prologue':
            return <Prologue />
        case 'Chapter_1':
            return <Chapter1 />
        case 'Chapter_2':
            return <Chapter2 />
        case 'Chapter_3':
            return <Chapter3 />
        case 'LastChapter':
            return <LastChapter />
        default:
            return <LastChapter />
    }
}