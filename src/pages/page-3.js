import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/header'
import NormalFooter from '../components/normalfooter'
import Perfil from '../components/perfil'

const ThirdPage = () => (
    <div>
        <div className = "container-fluid" style={cStyle}>
        <div className = "row">
            <div className = "col">
                <Header />
                <Perfil />
                <NormalFooter />
            </div>
            </div>
        </div>
    </div>
)

export default ThirdPage

const cStyle = {
    boxSizing: 'border-box',
    padding:'0',
    margin:'0',
    overflow: 'hidden',
    fontFamily: 'Lato',
    
  }