import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
    <div>
      <Navigation/>
        <div className='min-h-screen'>
        {children}
        </div>
      <Footer/>
    </div>
  )
}

export default layout