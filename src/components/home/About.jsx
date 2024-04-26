import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="relative w-[100vw] -mx-4 border h-[500px] flex justify-center items-center m-auto">
      <Image src="https://i.ibb.co/T2xCBD8/ch1.png" fill />
      <p className="m-auto absolute left-1/3 md:text-secondary-800  text-white font-serif  top-1/4 bottom-0 md:text-4xl text-2xl">
        चरावां गाँव भारत के उत्तर प्रदेश में अयोध्या जिले की बीकापुर तहसील में
        स्थित है। यह उप-जिला मुख्यालय बीकापुर से 9 किमी दूर स्थित है।
      </p>
    </div>
  );
}

export default About;
