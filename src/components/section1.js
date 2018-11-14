import React from 'react'

import Cards from './cards'
import '../css/index.css'

const Section1 = () => (
    <div>
        <div style = {tStyle}>
            <h1>Header</h1>
            <h3>text text text text text text text text text text text text text text text text text </h3>
            < Cards />
        </div>
    </div>
)

export default Section1

const tStyle = {
    textAlign: "center"
}