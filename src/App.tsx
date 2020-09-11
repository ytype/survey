import React, { useEffect, useState, createRef, useRef } from 'react'
import throttle from 'lodash.throttle'
import Query from "./components/Query"
import "./style.scss"

const App = () => {
  const items = Array(100).fill(0).map((x, y) => x + y)
  const [y, setY] = useState(0)
  const [focusIndex, setFocusIndex] = useState<number>(0)
  useEffect(() => {
    const calc = () => {
      setY(document.documentElement.scrollTop)
    }

    window.addEventListener('scroll', () => calc())
  })

  const itemList: React.ReactElement[] = items.map((item) => (
    <Query y={y} num={item} isFocus={item === focusIndex} setFocusIndex={setFocusIndex} />
  ))

  return (
    <section className="survey-page-body">
      {itemList}
    </section>
  )
}

export default App