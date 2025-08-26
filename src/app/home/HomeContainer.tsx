"use client"
import Booking from "./components/Booking";
import Banner from "./components/Banner";
import Opening from "./components/Opening";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";

export default function HomeContainer() {
  return (
    <>
      <Banner />
      <Opening />
      <Booking />
      <Reviews />
      <Gallery />
    </>
  )
}

