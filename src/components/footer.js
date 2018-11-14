import React from 'react'
import ListFooter from '../components/listfooter'

import '../css/index.css'

const Footer = () => (
    <div>  
        <div className = "footer">
            <div className = "footer-bg" style = {fStyle}>
                <div className = "lists">
                    <ListFooter />
                </div>
            </div>
        </div>         
    </div>
)

export default Footer

const fStyle = {
    position: "relative",
    height: "10%",
    backgroundColor: "#5469B1"
}