"use client"
import Treatments from "./components/Treatments";
import Banner from "./components/Banner";
import Opening from "./components/Opening";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Graphic from "./components/Graphic";

export default function HomeContainer() {
  return (
    <>
      <Banner />
      <Opening />
      <Graphic />
      <Treatments />
      <Gallery />
      <Testimonials />
    </>
  )
}

