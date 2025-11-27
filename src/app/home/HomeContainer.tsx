import Treatments from "./components/Treatments";
import Banner from "./components/Banner";
import Opening from "./components/Opening";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Graphic from "./components/Graphic";

export default function HomeContainer() {
  return (
    <>
      {/* BANNER SECTION */}
      <section>
        <Banner />
      </section>

      {/* OPENING SECTION */}
      <section>
        <Opening />
      </section>

      {/* GRAPHIC SECTION */}
      <section>
        <Graphic />
      </section>

      {/* TREATMENTS SECTION*/}
      <section>
        <Treatments />
      </section>

      {/* GALLERY SECTION */}
      <section>
        <Gallery />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section>
        <Testimonials />
      </section>
    </>
  );
}
