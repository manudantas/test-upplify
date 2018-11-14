import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

library.add();


const SocialMedias = () => (
    <div>
        <div className = "row">
            <div className = "col">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="1x" color="white"  />
            </div>
            <div className = "col">
                <FontAwesomeIcon icon={['fab', 'facebook']} size="1x" color="white" />
            </div>
            <div className = "col">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" color="white"  />
            </div>
            <div className = "col">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" color="white" />
            </div>

        </div>
    </div>
)

export default SocialMedias