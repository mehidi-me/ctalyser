import React from 'react'

function AnimImage2() {
  return (
    <div className="anim-box chat-anim fix">
    <div
      className="chat-main f1 revealed"
      style={{ visibility: "visible" }}
    >
      <div className="c-logo">
        {" "}
        <img decoding="async" src="/images/t.png" alt="" />{" "}
        <img decoding="async" src="/images/te.png" alt="" />
      </div>{" "}
      <img
        decoding="async"
        src="/images/u1.png"
        alt=""
        className="user"
      />{" "}
      <img
        decoding="async"
        src="/images/chat1.png"
        alt=""
        className="chat"
      />
    </div>
    <div
      className="chat-main chat2 f1 revealed"
      style={{ visibility: "visible" }}
    >
      <div className="c-logo">
        {" "}
        <img decoding="async" src="/images/s.png" alt="" />{" "}
        <img decoding="async" src="/images/slac.png" alt="" />
      </div>{" "}
      <img
        decoding="async"
        src="/images/u2.png"
        alt=""
        className="user"
      />{" "}
      <img
        decoding="async"
        src="/images/chat2.png"
        alt=""
        className="chat"
      />
    </div>
  </div>
  )
}

export default AnimImage2