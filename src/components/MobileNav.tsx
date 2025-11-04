import React from 'react'
import { Sling as Hamburger } from 'hamburger-react'

const MobileNav = () => {
  return (
    <div className='lg:hidden flex'>
      <Hamburger 
        size={24}
        color={'var(--btn-pink)'}
        rounded
      />
    </div>
  )
}

export default MobileNav