import React from 'react'

export default function OpenChapter(props) {
    return (
        <div className='open-chapter'>
            <div className="chapter-bg" />
            <div className="chapter-title">
                <div className="chapter-description">{ props.chapter.description }</div>
                <div className="chapter-name">{ props.chapter.name.toUpperCase() }</div>
            </div>
        </div>
    )
}