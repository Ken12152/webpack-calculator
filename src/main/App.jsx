import React from 'react'

import { helloworld } from '../component/helloworld'

export default props => (
    <div>
        <button type="button" onClick={ () => helloworld() }>Hello!</button>
    </div>
)