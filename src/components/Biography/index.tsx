import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Experience } from "../Experience";
import { Interests } from "../Interests";
import { ScrollUtils } from "@/utils/ScrollUtils";
import Image from "next/image";

function Biography() {
  const [height, setHeight] = useState(0);
  const GOLDEN_RATIO = 1.61803398875;

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const scrollDown = (num: number) => {
    ScrollUtils.scrollTo(document.body, num, 1250);
  };

  return (
    <>
      <div className="w-full h-full lg:w-1/2 xl:w-2/3 py-6 lg:py-12 px-6 lg:px-12">
        <h1 className="text-xl font-bold text-gray-800">About me</h1>
        <hr className="border border-b-0 border-x-0 border-gray-800 my-2 lg:my-4" />
        <p>
          I am a Full Stack Developer with more than 5 years of industry
          experience building websites, SPA, PWA and Web Services. I specialize
          in Java, Go, Python and Typescript and have professional experience
          working with Spring, Django, React & Angular. I also have experience
          working with Flutter, React Native, Flask, Sass and Tailwind CSS. Take
          a look at my work,{" "}
          {
            <Link
              href={"/blog"}
              className="underline hover:text-gray-800 transition-colors duration-100"
            >
              my blog
            </Link>
          }
          , or get in touch!
        </p>
        <Experience />
        <Interests />
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/3 p-6 lg:p-12 flex justify-center text-center">
        <Image
          src="/assets/img/fh-foto.png"
          alt="Felipe Hernández"
          width={height * (1 / GOLDEN_RATIO)}
          height={height * (1 / GOLDEN_RATIO)}
          className="w-3/4 lg:w-full h-3/4 lg:h-full object-cover"
        />
      </div>
    </>
  );
}

export { Biography };
