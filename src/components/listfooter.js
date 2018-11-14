import React from 'react'
import SocialMedias from '../components/socialmedias'

import '../css/index.css'

const ListFooter = () => (
    <div>
        <div className = "row">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <img src={require('../images/100.png')} alt="" />
                    <p className="register">Ⓒ Upplify 2018. Registered company in Brazil 23.622.284/0001-53</p>

                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold">Company</h6>
                    <p>
                        <a href="#!">Blog</a>
                    </p>
                    <p>
                        <a href="#!">Team</a>
                    </p>
                    <p>
                        <a href="#!">Press</a>
                    </p>
                    <p>
                        <a href="#!">Jobs</a>
                    </p>
                    </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold">Language</h6>
                    <p>
                        <a href="#!">English</a>
                    </p>
                    <p>
                        <a href="#!">Portuguese</a>
                    </p>
                    </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold">Company</h6>
                    <p>
                        <a href="#!">Blog</a>
                    </p>
                    <p>
                        <a href="#!">Team</a>
                    </p>
                    <p>
                        <a href="#!">Press</a>
                    </p>
                    <p>
                        <a href="#!">Jobs</a>
                    </p>
                    </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold">Support</h6>
                    <p>
                        <a href="#!">Help center</a>
                    </p>
                    <p>
                        <a href="#!">Contact</a>
                    </p>
                    </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"> 
                    <SocialMedias />
                </div>   
        </div>  
    </div>
)

export default ListFooter