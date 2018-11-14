import React from 'react'
import Header from '../components/header'
import Info from '../components/info'
import NormalFooter from '../components/normalfooter'

import '../css/resume.css'

const SecondPage = () => (
  <div>
    <div className = "container-fluid" style={cStyle}>
      <div className = "row">
        <div className = "col">
            <Header />
            <Info />
            <NormalFooter />
          </div>
        </div>
    </div>
  </div>
)

export default SecondPage

const cStyle = {
  boxSizing: 'border-box',
  padding:'0',
  margin:'0',
  overflow: 'hidden',
  fontFamily: 'Lato',
  
}