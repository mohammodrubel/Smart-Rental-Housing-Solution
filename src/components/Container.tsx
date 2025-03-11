import React, { ReactNode } from 'react'

function Container({children}:{children:ReactNode}) {
  return (
    <div className='w-[99%] sm:w-[98%] md:w-[95%] lg:[90%] mx-auto'>
        {children}
    </div>
  )
}

export default Container