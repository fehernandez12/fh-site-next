import React, { useEffect, useState } from "react";
import { LoadingScreen } from "../LoadingScreen";
import { BlogTitle } from "@/components/BlogTitle";
import { Featured } from "@/components/Featured";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

function BlogHomeScreen() {
  const [featured, setFeatured] = useState<TFeatured>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch("/api/blog/featured");
      const data: TFeatured = await response.json();
      setFeatured(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <main className="w-full h-full">
        <Navbar />
        <section className="w-full h-96 bg-[#282C34] text-gray-100">
          <BlogTitle />
        </section>
        <section className="w-full bg-gray-100 flex flex-col text-gray-800">
          {loading ? <LoadingSpinner /> : <Featured featured={featured!} />}
        </section>
        <section className="bg-[#282C34] w-full flex flex-col items-center justify-center">
          <Footer landing />
        </section>
      </main>
    </>
  );
}

export { BlogHomeScreen };
