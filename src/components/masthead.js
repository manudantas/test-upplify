import React from 'react'

import Menu from '../components/menu'
import Welcome from '../components/welcome'

import '../css/index.css'


const Masthead = () => (
    <div >
        <div className = "col-lg-12 p-0 col-md-12 col-sm-12 col-xs-12">
            <div className="masthead" >
                <div className="masthead-bg">
                    <div  style={nStyle}>
                        <Menu />
                    </div>
                    <div style = {wStyle}>
                        <Welcome />  
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Masthead

const nStyle = {
    WebkitTransform: "skewY(-3deg)",
    transform: "skewY(-3deg)",
    WebkitTransformOrigin: "bottom right",
    transformOrigin: "bottom right"
}

const wStyle = {
    WebkitTransform: "skewY(-3deg)",
    transform: "skewY(-3deg)",
    WebkitTransformOrigin: "bottom right",
    transformOrigin: "bottom right",
    paddingTop: "30px",
    paddingLeft: "20%"
}