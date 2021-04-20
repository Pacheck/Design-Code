import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Layout />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift</p>
        <p>
          <Link to="/page-2/">Watch the video</Link> <br />
        </p>
      </div>
    </div>

    
  </>
)

export default IndexPage
