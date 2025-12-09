import React from "react";

const BookingButton = () => {
  return (
    <div className="relative -top-0.5">
      <button
        className="btn w-[125px] btn-hover bg-(--btn-pink) text-white
        tracking-wider cursor-pointer p-2 hover:bg-(--main-pink) hover:text-white duration-300"
      >
        BOOK NOW
      </button>
    </div>
  );
};

export default BookingButton;
