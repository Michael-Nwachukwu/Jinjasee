import React from 'react'

const Heading = ({heading}) => {
  return (
    <>
        <h1 className='font-semibold text-5xl sm:text-[8em] text-primary-green text-left uppercase leading-none'>
            {heading.split('\n').map((item, key) => {
                return (
                    <span key={key}>
                        {item}
                        <br/>
                    </span>
                )
            })}
        </h1>
    </>
  )
}

export default Heading