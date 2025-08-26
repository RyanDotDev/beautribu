import React from 'react'

const BookingButton = () => {
  return (
    <div className='relative top-[-2px]'>
      <button className='btn w-[125px] btn-hover bg-[var(--btn-pink)] text-white
        tracking-wider cursor-pointer p-2 hover:bg-[var(--main-pink)] hover:text-white duration-300'
      >
        <span className=''>BOOK NOW</span>
      </button>
    </div>
  )
}

export default BookingButton