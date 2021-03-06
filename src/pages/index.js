import React from "react"
import { Link } from "gatsby"

import Layout from "../components/index"
import oscGhanaMap from "../images/brand/osc_ghana_map.svg"

const IndexPage = () => (
  <Layout
    header={
      <section className={"hero tw-clearfix"}>
        <div className={"container tw-flex tw-flex-wrap"}>
          <div className={"hero__caption tw-w-full md:tw-w-1/2"}>
            <div className={"hero__description"}>
              <strong className={"hero__strong"}>A community</strong> of
              passionate technology enthusiasts who dedicate work towards{" "}
              <strong className={"hero__strong"}>
                building, enhancing and adding value
              </strong>{" "}
              to <strong className={"hero__strong"}>open source tools</strong>{" "}
              in Ghana.
            </div>
            <div className={"hero__call-to-action tw-w-full"}>
              <button className={"btn md:btn-w btn__primary lg:tw-mr-5"}>
                <Link className={"btn__link"} to={"/join/"}>Join Community</Link>
              </button>
              <button className={"btn md:btn-w"}>
                <Link className={"btn__link"} to={"/projects/"}>View Projects</Link>
              </button>
            </div>
          </div>
          <div className={"hero__banner tw-w-full md:tw-w-1/2"}>
            <img
              className={"hero__img"}
              src={oscGhanaMap}
              alt={"OSC Ghana Map"}
            />
          </div>
        </div>
      </section>
    }
    main={
      <div>
        {/* A demo display text, delete before actual development */}
        <center>HELLO, JOIN US TO BUILD THIS PAGE</center>
      </div>
    }
  />
)

export default IndexPage
