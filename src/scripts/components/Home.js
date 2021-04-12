import React, { useContext } from 'react'
import { Context } from "../store/menu"

export default function HomePage() {
    const { store, dispatch } = useContext(Context)

    return (
        <div id="index-page">
            <div className="index-bg">
                <span/>
                <span/>
                <span/>
            </div>
            <div className="index-logo"/>
            <div id="index-button" data-state={ store.dataState } onClick={() => dispatch({ type: "switch" })}>
                <div className="btn-bg"/>
                <div className="btn-main">
                    <div className="short-id short-id-1">
                        <span/><span/><span/><span/>
                    </div>
                    <div className="short-id short-id-2">
                        <span/><span/><span/>
                    </div>
                </div>
            </div>
            <div className="index-sns">
                <div className="inner">
                    <a target="_blank" href="https://sound.cyris.moe" title="Blog" rel="noopener noreferrer">
                        <i className="czs-pen-write"/>
                    </a>
                    <a target="_blank" href="https://kiwi-fruit.cyris.moe" title="KiwiFruit"
                       rel="noopener noreferrer">
                        <i className="czs-crown"/>
                    </a>
                    <a target="_blank" href="https://github.com/iCyris" title="GitHub" rel="noopener noreferrer">
                        <i className="czs-github-logo"/>
                    </a>
                    <a target="_blank" href="https://twitter.com/yuki_cyris" title="Twitter"
                       rel="noopener noreferrer">
                        <i className="czs-twitter"/>
                    </a>
                    <a target="_blank" href="https://space.bilibili.com/33665543" title="Bilibili"
                       rel="noopener noreferrer">
                        <i className="czs-bilibili"/>
                    </a>
                </div>
            </div>
        </div>
    )
}