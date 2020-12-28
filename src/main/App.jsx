import React from 'react'

import ButtonFunc from '../component/ButtonFunc'
import { helloworld } from '../component/helloworld'

export default props => (
    <div>
        <ButtonFunc func={helloworld} label="Hello, World!" />
    </div>
)