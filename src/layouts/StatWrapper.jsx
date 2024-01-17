import React from 'react'

const StatWrapper = ({children}) => {
  return (
    <div className="w-screen h-[25em] sm:h-screen relative flex justify-center items-center">
        {children}
    </div>
  )
}

export default StatWrapper