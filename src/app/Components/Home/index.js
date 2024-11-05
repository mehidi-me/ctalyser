"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import ScrollCarousel from "scroll-carousel";
import "scroll-carousel/dist/scroll.carousel.min.css";
import Hero from "./Hero";
import CompanyLogo from "./CompanyLogo";
import MissionSection from "./MissionSection";
import Sections from "./Sections";
import Testimonial from "./Testimonial";

export default function Home({data}) {
  useEffect(() => {
    new ScrollCarousel(".slider", {
      smartSpeed: true,
      autoplay: true,
      speed: 5,
    });
    // Initialize ScrollReveal with custom reset handling
    ScrollReveal({
      reset: false, // Ensures the animation resets when the element goes out of view
      distance: "60px",
      duration: 1000,
      delay: 50,
      viewFactor: 0.1,
    });
    // Set up ScrollReveal for various elements
    ScrollReveal().reveal("main .content h1", {
      delay: 50,
      origin: "bottom",
    });
    ScrollReveal().reveal(".an1", {
      delay: 20,
      origin: "bottom",
    });
    ScrollReveal().reveal(".an2", {
      delay: 80,
      origin: "bottom",
    });
    ScrollReveal().reveal(".an3", {
      delay: 100,
      origin: "bottom",
    });
    ScrollReveal().reveal(".an4", {
      delay: 10,
      origin: "bottom",
    });
    ScrollReveal().reveal(".an5", {
      delay: 120,
      origin: "bottom",
    });
    ScrollReveal().reveal(".an6", {
      delay: 60,
      origin: "bottom",
    });
    // Custom reveal for elements .f1 with class handling
    ScrollReveal().reveal(".f1", {
      delay: 100,
      origin: "bottom",
      beforeReveal: function (el) {
        el.classList.add("revealed");
        el.classList.remove("reset");
      },
      beforeReset: function (el) {
        el.classList.add("reset");
        el.classList.remove("revealed");
      },
    });
  }, []);
  return (
    <div className="section the_content has_content">
      <div className="section_wrapper">
        <div className="the_content_wrapper">
          {data?.map(section => {
            if(section._type == "hero"){
              return  <Hero data={section} />
            }
            if(section._type == "companyLogo"){
             return <CompanyLogo data={section} />
            }
            if(section._type == "mission"){
             return <MissionSection data={section} />
            }
            if(section._type == "section"){
             return <Sections data={section} />
            }
            if(section._type == "testimonialSection"){
             return <Testimonial data={section} />
            }
          })}
        
        
    
      
       
          <section className="form-sec" id="join">
            {" "}
            <img
              decoding="async"
              className="overlay"
              src="/images/form.png"
              alt=""
            />
            <div className="container">
              <div className="title center">
                <h2>JOIN</h2>
              </div>
              <form id="customForm" data-kmt={1}>
                <p />
                <p>
                  Be part of a movement that makes a difference. Sign up now to
                  be among the first to experience the future of workplace
                  giving with Catalyser.
                </p>
                <p />
                <div className="row">
                  <div className="input">
                    {" "}
                    <label htmlFor="f-name">First name</label>{" "}
                    <input type="text" id="f-name" name="f-name" />{" "}
                    <small className="error-message" id="f-name-error">
                      Please enter a charity name
                    </small>
                  </div>
                  <div className="input">
                    {" "}
                    <label htmlFor="l-name">Last name</label>{" "}
                    <input type="text" id="l-name" name="l-name" />{" "}
                    <small className="error-message" id="l-name-error">
                      Please enter a charity name
                    </small>
                  </div>
                </div>
                <div className="input">
                  {" "}
                  <label htmlFor="email">Company email</label>{" "}
                  <input type="text" id="email" name="email" />{" "}
                  <small className="error-message" id="email-error">
                    Please enter a charity name
                  </small>
                </div>
                <div
                  id="postError2"
                  style={{ marginTop: "3rem", display: "none" }}
                >
                  <p
                    style={{
                      margin: "0 auto",
                      padding: "15px 20px",
                      background: "#F5E7E7",
                      borderRadius: "2rem",
                      fontWeight: 500,
                      width: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {" "}
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.00008 1.99999C4.68637 1.99999 2.00008 4.68628 2.00008 7.99999C2.00008 11.3137 4.68637 14 8.00008 14C11.3138 14 14.0001 11.3137 14.0001 7.99999C14.0001 4.68628 11.3138 1.99999 8.00008 1.99999ZM0.666748 7.99999C0.666748 3.9499 3.94999 0.666656 8.00008 0.666656C12.0502 0.666656 15.3334 3.9499 15.3334 7.99999C15.3334 12.0501 12.0502 15.3333 8.00008 15.3333C3.94999 15.3333 0.666748 12.0501 0.666748 7.99999ZM5.52868 5.52858C5.78903 5.26824 6.21114 5.26824 6.47149 5.52858L8.00008 7.05718L9.52868 5.52858C9.78903 5.26824 10.2111 5.26824 10.4715 5.52858C10.7318 5.78893 10.7318 6.21104 10.4715 6.47139L8.94289 7.99999L10.4715 9.52858C10.7318 9.78893 10.7318 10.211 10.4715 10.4714C10.2111 10.7317 9.78903 10.7317 9.52868 10.4714L8.00008 8.9428L6.47149 10.4714C6.21114 10.7317 5.78903 10.7317 5.52868 10.4714C5.26833 10.211 5.26833 9.78893 5.52868 9.52858L7.05727 7.99999L5.52868 6.47139C5.26833 6.21104 5.26833 5.78893 5.52868 5.52858Z"
                        fill="#9D0D11"
                      />
                    </svg>{" "}
                    Oops Something went wrong.
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 300,
                      fontSize: "2rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    Try again later.
                  </p>
                </div>{" "}
                <button type="submit" id="submitButton2">
                  Be the first to know{" "}
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
                  </svg>
                </button>
              </form>
            </div>
          </section>
          <p />
        </div>
      </div>
    </div>
  );
}
