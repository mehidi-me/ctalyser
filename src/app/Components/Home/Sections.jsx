import React from "react";
import SectionItem from "./SectionItem";
import AnimImage1 from "../AnimImages/AnimImage1";
import AnimImage2 from "../AnimImages/AnimImage2";

function Sections() {
  return (
    <section>
      <div className="container">
        <SectionItem
          imagePositon={"left"}
          AnimImages={AnimImage1}
          title={"AI-Driven personalised engagement feed"}
          description={
            " Customises volunteering and donation opportunities based on user interests, ensuring relevant, engaging content tailored to each individual."
          }
        />
        <SectionItem
          imagePositon={"right"}
          AnimImages={AnimImage2}
          title={"Seamless integration"}
          description={`Integrated with Slack and Microsoft Teams, bringing volunteering and giving updates to the tools your employees
            already use daily, boosting participation.`}
        />

        <div className="grid-2 align-center">
          <div className="anim-box cards-anim-2">
            {" "}
            <img
              decoding="async"
              src="/images/e1-2.png"
              className="an1"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/e2-1.png"
              className="an2"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/e3.png"
              className="an3"
              alt=""
              style={{ visibility: "visible" }}
            />
          </div>
          <div className="content an1" style={{ visibility: "visible" }}>
            <h2>‘Giving without giving’</h2>
            <p>
              Foster a culture of engagement through micro-interactions like
              likes, comments, and shares, driving meaningful workplace
              engagement and encouraging involvement.
            </p>
          </div>
        </div>
        <div className="grid-2 align-center">
          <div className="content an1" style={{ visibility: "visible" }}>
            <h2>Streamlined user management</h2>
            <p>
              Simplify user onboarding and engagement tracking with an intuitive
              dashboard that reduces admin workload, offering automated
              reminders and updates.
            </p>
          </div>
          <div className="anim-box cards-anim-3 fix">
            {" "}
            <img
              decoding="async"
              src="/images/4-2.png"
              className="an1"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/onboard.png"
              className="an2"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/dashboard.png"
              className="an3"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/front.png"
              className="an5"
              alt=""
              style={{ visibility: "visible" }}
            />
          </div>
        </div>
        <div className="grid-2 align-center">
          <div className="anim-box cards-anim-4">
            {" "}
            <img
              decoding="async"
              src="/images/h1.png"
              className="an1"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/h2.png"
              className="an2"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/h3.png"
              className="an3"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/h4.png"
              className="an4"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/h5.png"
              className="an5"
              alt=""
              style={{ visibility: "visible" }}
            />{" "}
            <img
              decoding="async"
              src="/images/h6.png"
              className="an6"
              alt=""
              style={{ visibility: "visible" }}
            />
          </div>
          <div className="content an1" style={{ visibility: "visible" }}>
            <h2>Unified corporate volunteering management</h2>
            <p>
              Manage, track, and report on all volunteer programs from one
              place, providing employees with an easy-to-use interface for
              signing up for events.
            </p>
          </div>
        </div>
        <div className="grid-2 align-center">
          <div className="content an1" style={{ visibility: "visible" }}>
            <h2>Automated payroll giving &amp; donation matching</h2>
            <p>
              Enable automatic payroll donations with corporate matching, making
              it effortless for employees to give and increasing overall impact.
            </p>
          </div>
          <div
            className="anim-box cards-anim-5 f1 fix revealed"
            style={{ visibility: "visible" }}
          >
            {" "}
            <img decoding="async" src="/images/sec-shape.png" alt="" />{" "}
            <img decoding="async" src="/images/1.png" alt="" />{" "}
            <img decoding="async" src="/images/22.png" alt="" />{" "}
            <img decoding="async" src="/images/33.png" alt="" />
          </div>
        </div>
        <div className="grid-2 align-center">
          <div className="anim-box">
            {" "}
            <img
              decoding="async"
              src="/images/im.png"
              className="an1"
              alt=""
              style={{ visibility: "visible" }}
            />
          </div>
          <div className="content an1" style={{ visibility: "visible" }}>
            <h2>
              Real impact, <br /> measurable results
            </h2>
            <p>
              Partnering with over 25,000 charities, Catalyser has already
              facilitated over $35 million in impact, and we’re just getting
              started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sections;
