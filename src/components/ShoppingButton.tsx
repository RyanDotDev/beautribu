import React from 'react'

const ShoppingButton = () => {
  return (
    <div className='relative top-[-2px]'>
      <button className='btn btn-hover w-[125px] bg-[var(--main-pink)] text-black tracking-wider cursor-pointer 
        p-2 duration-300 hover:text-white transform hover:scale-x-125 origin-center hover:pr-[1rem]'
      >
        SHOP NOW
      </button>
    </div>
  )
}

export default ShoppingButton;