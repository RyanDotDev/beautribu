import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
  return (
    <div className="">
      <Image
        src="/logo/beau_tribu_logo_original.webp"
        alt="Beau Tribu Logo"
        width={300}
        height={300}
        className="fixed left-0 right-0 top-30 mx-auto -z-1 opacity-20"
      />
    </div>
  );
};

export default BackgroundImage;
