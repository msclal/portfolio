import React, { useRef, useState, useEffect } from "react";
import Hello from "@/components/Hello";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Headphones from "@/components/Headphones";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Sidebar from "@/components/Sidebar";
import Stats from "@/components/Stats";

export default function Home() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const useIntersection = (ref, options) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);

      if (ref.current) {
        observer.observe(ref.current);

        return () => {
          observer.unobserve(ref.current);
        };
      }
    }, [ref, options]);

    return isIntersecting;
  };

  const isHomeVisible = useIntersection(homeRef, { threshold: 0.5 });
  const isProjectsVisible = useIntersection(projectsRef, { threshold: 0.6 });
  const isExperienceVisible = useIntersection(experienceRef, {
    threshold: 0.9,
  });
  const isContactVisible = useIntersection(contactRef, { threshold: 0.9 });

  return (
    <>
      <Sidebar
        isHomeVisible={isHomeVisible}
        isProjectsVisible={isProjectsVisible}
        isExperienceVisible={isExperienceVisible}
        isContactVisible={isContactVisible}
      />
      <div className="space-y-5 md:space-y-6">
        <div className="flex gap-x-6 h-full">
          <Hello homeRef={homeRef} />
          <div className="max-md:hidden h-full md:w-[55%]">
            <Gallery />
          </div>
        </div>
        <Technologies />
      </div>
      <Projects projectsRef={projectsRef} />

      {/*  DESKTOP */}
      <div className="flex gap-x-8 max-md:hidden h-full">
        <Stats />
        <Experience experienceRef={experienceRef} />
      </div>

      {/* MOBILE */}
      <div className="md:hidden space-y-5">
        <div id="experience_mobile">
          <Experience />
        </div>
        <div className="">
          <Gallery />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="flex gap-x-8 max-sm:hidden">
        <Headphones />
        <Contact contactRef={contactRef} />
      </div>
      {/* MOBILE */}
      <div className="sm:hidden">
        <div className="mb-5">
          <Headphones />
        </div>
        <div id="contact_mobile">
          <Contact />
        </div>
      </div>
    </>
  );
}
