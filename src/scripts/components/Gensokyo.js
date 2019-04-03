import React, {useContext} from 'react'
import Prologue from './Prologue'
import LastChapter from './LastChapter'
import { Context } from "../store/menu";

export default function Gensokyo() {
    const { store } = useContext(Context)

    switch (store.chapter.name) {
        case 'Prologue':
            return <Prologue />
        case 'LastChapter':
            return <LastChapter />
        default:
            return <LastChapter />
    }
}

// Console
console.log("> 『 绿生的幻想乡 』")
console.log(">  Cyris's design portfolio v2.")