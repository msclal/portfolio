import Hello from "@/components/Hello";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Headphones from "@/components/Headphones";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Hello />
      <Technologies />
      <Projects />
      {/* <Gallery /> */}
      <div className="flex gap-x-5 max-md:hidden h-full">
        <Gallery />
        <Experience />
      </div>
      <div className="md:hidden space-y-5">
        <div id="experience">
          <Experience />
        </div>
        <div className="">
          <Gallery />
        </div>
      </div>

      <div className="flex gap-x-5 max-sm:hidden">
        <Headphones />
        <Contact />
      </div>
      <div className="sm:hidden">
        <div className="mb-5">
          <Headphones />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}
