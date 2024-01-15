import React from 'react'
import TextGenerateEffect from './TextGenerateEffect'

const Typewriter = ({ words }) => {
    return (
        <div className='text-2xl leading-snug tracking-wide'>
            <TextGenerateEffect words={words} />
        </div>
    )
}

export default Typewriter