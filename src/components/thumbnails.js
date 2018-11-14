import React from 'react'


import '../css/index.css'

const Thumbnails = () => (
    <div>
        <div className = "row" style = {tStyle}>
            <div className = "col-sm-04 col-xs-04 col-md-auto col-lg-auto">
                <img src={require('../images/thumbnail-01.jpg')} className = "img-thumbnail" alt=""/>
            </div>
            <div className = "col-sm-04 col-xs-04 col-md-auto col-lg-auto">
                <img src={require('../images/thumbnail-02.jpg')} className = "img-thumbnail" alt=""/>
            </div>
            <div className = "col-sm-04 col-xs-04 col-md-auto col-lg-auto">
                <img src={require('../images/thumbnail-03.jpg')} className = "img-thumbnail" alt=""/>
            </div>
                <div className = "col-sm-04 col-xs-04 col-md-auto col-lg-auto">
                    <img src={require('../images/thumbnail-04.jpg')} className = "img-thumbnail" alt=""/>
                </div>
                <div className = "col-sm-04 col-xs-04 col-md-auto col-lg-auto">
                    <img src={require('../images/thumbnail-05.jpg')} className = "img-thumbnail" alt=""/>
                </div>
        </div>
    </div>
)

export default Thumbnails

const tStyle = {
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "6%"
}