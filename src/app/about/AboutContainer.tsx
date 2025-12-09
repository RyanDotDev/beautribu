import React from "react";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import BackgroundImage from "./components/BackgroundImage";

export default function AboutContainer() {
  return (
    <main>
      <BackgroundImage />
      {/* FIRST SECTION */}
      <section>
        <FirstSection />
      </section>

      {/* SECOND SECTION */}
      <section>
        <SecondSection />
      </section>
    </main>
  );
}
