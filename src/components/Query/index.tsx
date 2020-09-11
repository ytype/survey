import React, { useRef, useEffect, useState } from 'react'
import './style.scss'

type props = {
    num: number
    y?: number
    isFocus: boolean
    setFocusIndex(focus: number): void// (focus: boolean) => void
}

const Query = ({ num, y, isFocus, setFocusIndex }: props) => {
    const ref: any = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const top = ref.current.getBoundingClientRect().top
        if (top <= 780 && top >= 500) {
            setFocusIndex(num)
        }
    }, [num, setFocusIndex, y])

    return (
        <div className="question" ref={ref} style={isFocus ? { background: 'aqua' } : {}}>
            <h1>예시 질문 {num}</h1>
            <p>label 1</p>
            <p>label 2</p>
            <p>label 3</p>
            <p>label 4</p>
            <p>label 5</p>
        </div >
    )
}

export default Query