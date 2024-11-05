import React from 'react'

function AnimImage1() {
  return (
    <div className="anim-box cards-anim">
      {" "}
      <img
        decoding="async"
        src="/images/c1.png"
        className="an1"
        alt=""
        style={{ visibility: "visible" }}
      />{" "}
      <img
        decoding="async"
        src="/images/c2-1.png"
        className="an2"
        alt=""
        style={{ visibility: "visible" }}
      />{" "}
      <img
        decoding="async"
        src="/images/c3-1.png"
        className="an3"
        alt=""
        style={{ visibility: "visible" }}
      />{" "}
      <img
        decoding="async"
        src="/images/ai.png"
        className="an4"
        alt=""
        style={{ visibility: "visible" }}
      />
    </div>
  )
}

export default AnimImage1