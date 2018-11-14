import React from 'react'



import '../css/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

library.add(faLaptopCode);

const Cards = () => (
    <div>
            <div className = "row" style = {cStyle}>
                <div className = "col">
                <div className="card">
                    <div className="card-body">
                    <FontAwesomeIcon icon="laptop-code" size="4x" color="rgb(103, 130, 218)"/>
                    <div style = {tStyle}>
                        <h5>Development</h5>
                        <h6>text text text text text text text text text text text text text text text text text text text text text text text text</h6>
                    </div>
                    </div>
                </div>
                </div>
                <div className = "col">
                <div className="card">
                    <div className="card-body" >
                    <FontAwesomeIcon icon="laptop-code" size="4x" color="rgb(103, 130, 218)"/>
                    <div style = {tStyle}>
                    <h5>Development</h5>
                    <h6>text text text text text text text text text text text text text text text text text text text text text text text text</h6>
                    </div>
                    </div>
                </div>
                </div>
                <div className = "col">
                <div className="card">
                    <div className="card-body">
                    <FontAwesomeIcon icon="laptop-code" size="4x" color="rgb(103, 130, 218)"/>
                    <div style = {tStyle}>
                    <h5>Development</h5>
                        <h6>text text text text text text text text text text text text text text text text text text text text text text text text</h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
)

export default Cards

const cStyle = {
    paddingTop: "5%",
    paddingLeft: "8%",
    paddingBottom: "8%"
}

const tStyle = {
    paddingTop: "30px"
}