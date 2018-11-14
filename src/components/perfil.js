import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import MySocialMedias from './mysocialmedias';


const Perfil = () => (
    <div>
            <div className="container" style = {cStyle}>
            <div className="row">
                <div className="col text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                </div>
                </div>
                <div className="row">
                <div className="col text-center">
                        <img className="rounded-circle"  style = {iStyle} src={require('../images/Manuella.jpg')} alt="" />
                        <h4>Manuella Dantas</h4>
                        <p className="text-muted">Developer</p>
                        <MySocialMedias />

                </div>
                <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">Manuella Dantas Alves, Born in Mossoró - RN, Currently living in Campina Grande city - PB. Graduating in Computer Science at the Universidade Estadual da Paraíba, aspiring to be a web developer (Backend/Frontend).</p>
                </div>
                </div>
            </div>
      </div>
    </div>
)

export default Perfil



const cStyle = {
    marginTop: "7%",
    height: "600px"
}

const iStyle = {
    width: "225px",
    height: "225px",
    border: "7px solid #fff"
}