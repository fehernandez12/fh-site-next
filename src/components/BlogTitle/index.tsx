import React from "react";
import { ScrollButton } from "../ScrollButton";
import { Navbar } from "../Navbar";

function BlogTitle() {
  return (
    <>
      <div className="h-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl">My blog.</h1>
        <p className="text-lg">What I think, what I do & other stuff.</p>
        <ScrollButton />
      </div>
    </>
  );
}

export { BlogTitle };
