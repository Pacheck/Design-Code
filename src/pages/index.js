import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Card from '../components/Card';

import sketchLogo from '../assets/logo-sketch.png';
import figmaLogo from '../assets/logo-figma.png';
import studioLogo from '../assets/logo-studio.png';
import framerLogo from '../assets/logo-framer.png';
import reactLogo from '../assets/logo-react.png';
import swiftLogo from '../assets/logo-swift.png';

import Wallpaper from '../assets/wallpaper.jpg'
import Wallpaper2 from '../assets/wallpaper2.jpg'
import Wallpaper3 from '../assets/wallpaper3.jpg'
import Wallpaper4 from '../assets/wallpaper4.jpg'

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Layout />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />
        design and code</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift</p>
        <p>
          <Link to="/page-2/">Watch the video</Link> <br />
        </p>
        <div className="Logos">
          <img src={sketchLogo} width="50"/>
          <img src={figmaLogo} width="50"/>
          <img src={studioLogo} width="50"/>
          <img src={framerLogo} width="50"/>
          <img src={reactLogo} width="50"/>
          <img src={swiftLogo} width="50"/>
        </div>
        <svg width="100%" height="172"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="white">
            <animate 
              repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.90189 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

              M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.90189 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
              " 
            />
          </path>
        </svg>
      </div>
      <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
          <Card 
            title="Design System" 
            text="10 sections"
            image={Wallpaper}
          />
          <Card 
            title="React for Designers" 
            text="12 sections"
            image={Wallpaper2}
          />
          <Card 
            title="Sound Design" 
            text="5 sections"
            image={Wallpaper3}
          />
          <Card 
            title="ARKit 2" 
            text="10 sections"
            image={Wallpaper4}
          />
        </div>
        
      </div>
    </div>    
  </>
)

export default IndexPage
