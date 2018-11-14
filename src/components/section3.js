import React from 'react'

import Signups from '../components/signup'
import '../css/index.css'

const Section3 = () => (
    <div>
        <div style = {tStyle}>
            <h1>How It Works?</h1>
        </div>
            <div className = "row" style={sStyle}>
                <div className = "col-sm-12 col-xs-12 col-md-6 col-lg-6">
                <img src={require('../images/navigo.png')} alt=""/>
                </div>
                <div className = "col" style={rStyle}>
                    <Signups />
                </div>
        </div>

    </div>
)

export default Section3

const sStyle = {
    paddingLeft: "10%",
    paddingBottom: "2%"
    
}

const rStyle = {
    paddingTop: "5%",
    paddingRight: "5%",
}

const tStyle = {
    textAlign: "center",
    paddingTop: "7%",
    paddingBottom: "1%"
}
