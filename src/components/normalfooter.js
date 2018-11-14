import React from 'react'
import ListFooter from '../components/listfooter'

import '../css/resume.css'

const NormalFooter = () => (
  <div>
    <div className = "normalfooter">
        <div className = "normalfooter-bg" style = {fStyle}>
            <div className = "listfooter">
                <ListFooter />
            </div>
        </div>
    </div>
  </div>
)

export default NormalFooter

const fStyle = {
    position: "relative",
    height: "10%",
    backgroundColor: "#5469B1"
}