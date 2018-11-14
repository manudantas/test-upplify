import React from 'react'
import { Link } from 'gatsby'

import '../css/index.css'
import 'bootstrap/dist/css/bootstrap.css'


import Masthead from '../components/masthead'
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Footer from '../components/footer';

const IndexPage = () => (
    <div>
        <div className="container-fluid" style={cStyle}>
          <div className = "row">
             <div  className = "col">
                <Masthead  />
                <Section1 />
                <Section2 />
                <Section3 />
                <Footer />
                
            </div>
          </div>
        </div>

    </div>
)

export default IndexPage

const cStyle = {
    boxSizing: 'border-box',
    padding:'0',
    margin:'0',
    overflow: 'hidden',
    fontFamily: 'Lato',
    
}