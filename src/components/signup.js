import React from 'react'

import '../css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronCircleUp );

const Signups = () => (
    <div>
            <div className="row">
                <div className="col">
                <FontAwesomeIcon icon="chevron-circle-up" size="2x" color="rgb(103, 130, 218)"/>
                <h4>Signup</h4>
                <h5>text text text text text text text text text text text text</h5>
                </div>
                <div className="col">
                <FontAwesomeIcon icon="chevron-circle-up" size="2x" color="rgb(103, 130, 218)"/>
                <h4>Signup</h4>
                <h5>text text text text text text text text text text text text</h5>
                </div>
                    <div className="w-100"></div>
                    <div className="col">
                    <FontAwesomeIcon icon="chevron-circle-up" size="2x" color="rgb(103, 130, 218)"/>
                    <h4>Signup</h4>
                    <h5>text text text text text text text text text text text text</h5>
                    </div>
                    <div className="col">
                    <FontAwesomeIcon icon="chevron-circle-up" size="2x" color="rgb(103, 130, 218)"/>
                    <h4>Signup</h4>
                    <h5>text text text text text text text text text text text text</h5>
                    </div>
                </div>
    </div>
)

export default Signups