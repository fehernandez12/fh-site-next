import React, { useEffect } from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { HelloCode } from "@/components/HelloCode";
import { ScrollButton } from "@/components/ScrollButton";
import { Biography } from "@/components/Biography";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { RecentPosts } from "@/components/RecentPosts";

function MainPage() {
  return (
    <>
      <main className="lg:hidden">
        <section className="bg-[#282C34] h-screen w-full flex flex-col items-center justify-center text-center">
          <HelloCode />
          <ScrollButton />
        </section>
        <section className="bg-[#BEBEBE] w-full flex flex-col lg:flex-row items-center justify-center">
          <Biography />
        </section>
        <section
          className="bg-gray-100 w-full flex flex-col lg:flex-row items-center justify-center"
          id="recent-posts"
        >
          <RecentPosts />
        </section>
        <section className="bg-[#282C34] w-full flex flex-col items-center justify-center">
          <Contact />
          <Footer />
        </section>
      </main>
      <main className="hidden lg:block">
        <ScrollTrigger
          pin
          pinSpacing={false}
          start="top top"
          scrub={true}
          markers={false}
          snap={{ snapTo: 1, duration: 0.5 }}
        >
          <Tween>
            <section className="bg-[#282C34] h-screen w-full flex flex-col items-center justify-center text-center">
              <HelloCode />
              <ScrollButton />
            </section>
          </Tween>
          <Tween>
            <section className="bg-[#BEBEBE] h-screen w-full flex flex-col lg:flex-row items-center justify-center">
              <Biography />
            </section>
          </Tween>
          <Tween>
            <section
              id="recent-posts"
              className="bg-gray-100 h-screen w-full flex flex-col items-center justify-center"
            >
              <RecentPosts />
            </section>
          </Tween>
          <Tween>
            <section className="bg-[#282C34] h-screen w-full flex flex-col items-center justify-center">
              <Contact />
              <Footer />
            </section>
          </Tween>
        </ScrollTrigger>
      </main>
    </>
  );
}

export { MainPage };
