import { ScrollUtils } from "@/utils/ScrollUtils";
import React, { useEffect, useState } from "react";

function ScrollButton() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const scrollDown = (num: number) => {
    ScrollUtils.scrollTo(document.body, num, 1250);
  };

  return (
    <button
      onClick={() => scrollDown(height)}
      className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <i className="bi-chevron-down text-xl text-gray-200"></i>
    </button>
  );
}

export { ScrollButton };
