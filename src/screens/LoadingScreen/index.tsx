import React from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import Head from "next/head";

function LoadingScreen() {
  return (
    <>
      <div className="h-screen w-full bg-gray-800 flex flex-col items-center justify-center">
        <LoadingSpinner />
      </div>
    </>
  );
}
export { LoadingScreen };
