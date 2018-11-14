import React from 'react'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

library.add();

const MySocialMedias = () => (
    <div>
        <ul class="list-inline" style = {cStyle}>
            <li class="list-inline-item">
                <a href="https://www.instagram.com/manu.dantass">      
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="#5469B1"  />
                </a>
            </li>
                <li class="list-inline-item">
                    <a href="https://www.facebook.com/manuella.dantasalves">
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="#5469B1"  />
                    </a>
                </li>
                    <li class="list-inline-item">
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5583991155788">
                            <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x" color="#5469B1"  />
                        </a>
                    </li>
        </ul>
    </div>
)

export default MySocialMedias

const cStyle = {
    marginRight: "2%"
}