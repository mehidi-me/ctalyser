import React from 'react'

function Hero({data}) {
  console.log(data.image)
  return (
    <main>
            {" "}
            <img
              decoding="async"
              src="/images/hero.svg"
              alt=""
              className="overlay"
            />
            <div className="container">
              <div className="content">
                <h1 style={{ visibility: "visible" }}>
                  {data.heading}
                </h1>
                <div className="des">
                  <h2 className="an3" style={{ visibility: "visible" }}>
                    {data.title}
                  </h2>
                  <p className="an2" style={{ visibility: "visible" }}>
                    {data.tagline}
                  </p>
                </div>{" "}
                <a href={data.button?.url} data-kmt={1}>
                  <button>
                    {data.button?.title}
                    <svg
                      width={7}
                      height={10}
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.02876 0.528514C1.28911 0.268165 1.71122 0.268165 1.97157 0.528514L5.97157 4.52851C6.23192 4.78886 6.23192 5.21097 5.97157 5.47132L1.97157 9.47132C1.71122 9.73167 1.28911 9.73167 1.02876 9.47132C0.768409 9.21097 0.768409 8.78886 1.02876 8.52851L4.55735 4.99992L1.02876 1.47132C0.768409 1.21097 0.768409 0.788864 1.02876 0.528514Z"
                        fill="white"
                      />
                    </svg>{" "}
                  </button>
                </a>
              </div>
            </div>
          </main>
  
  
  )
}

export default Hero