import * as React from "react"
import { useEffect, useState } from "react"
export default function App() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="App">
      <section className="hero">
        <img
          src="./Assets/desc.png"
          alt="test"
          className="parallax"
          style={{
            transform: `translateY(${offset * 0.5}px)`,
          }}
        />
        <div className="text-wrapper">
          <h1 className="headline">Parallax</h1>
          <h2 className="sub-headline">Scrolling effect</h2>
        </div>
      </section>
    </div>
  )
}