import React from 'react'

import '../css/index.css'

const Welcome = () => (
    <div>
            <div className = "row">
                <div className = "col textwelcome pl-0">
                    <h3>Welcome to Test</h3>
                    <h1>SITE TEST UPPLIFY</h1>
                    <h2>marketing, development, design</h2>
                    <button className="btn btn-success">Button</button>
                </div>
                <div className = "col">
                    <img src={require('../images/smartphone.png')} alt="" />
                </div>
            </div>
    </div>
)

export default Welcome

