import React from 'react'

import Thumbnails from './thumbnails'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import '../css/index.css'
library.add(faArrowRight);

const Section2 = () => (
    <div>
        <div style= {tStyle}>
            <h1>Header Header Header</h1>
            <Thumbnails />
            <button className="btn btn-success" style= {bStyle}>See more <FontAwesomeIcon icon="arrow-right" size="1x" color="white"/></button>
        </div>
    </div>
)

export default Section2


const bStyle = {

        letterSpacing: '1',
        lineHeight: '25px',
        borderRadius: '40px',
        transition: 'all 0.3s ease 0s',
        marginBottom: "5%"
    
}

const tStyle = {

    textAlign: "center",
    backgroundColor: "rgb(247, 247, 247)",
    paddingTop: "5%",
    width: "100%",

}