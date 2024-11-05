import React from 'react'

function MissionSection() {
  return (
    <section>
    <div className="container">
      <div className="relative-block d-flex colm all-center x-1">
        {" "}
        <img
          decoding="async"
          src="/images/shape1.svg"
          alt=""
          className="overlay"
        />
        <div className="title">
          <h2 className="an1" style={{ visibility: "visible" }}>
            We’re On a Mission
          </h2>
          <p className="an2" style={{ visibility: "visible" }}>
            Catalyser is your all-in-one social purpose platform. <br />{" "}
            Ignite passion. Break down barriers. <br /> Drive meaningful
            engagement.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default MissionSection