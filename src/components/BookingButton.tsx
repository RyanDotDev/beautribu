import React from 'react'

const BookingButton = () => {
  return (
    <div className='pr-0 lg:pr-6'>
      <button className='border-2 border-[var(--btn-pink)] text-[var(--btn-pink)] rounded-xl
        tracking-wider cursor-pointer p-2 hover:bg-[var(--btn-pink)] hover:text-white duration-300'
      >
        <span className=''>BOOK NOW</span>
      </button>
    </div>
  )
}

export default BookingButton