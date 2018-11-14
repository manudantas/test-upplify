import React from 'react'
import Link from 'gatsby-link'

import '../css/index.css'

const Menu = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top"><h1>LOGOHERE</h1> </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
            Menu
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#home"><Link to="/">Home</Link></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#resume"><Link to="/page-2/">Resumé</Link></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#page3"><Link to="/page-3/">Page 3</Link></a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
)

export default Menu