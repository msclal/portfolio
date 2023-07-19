import Hello from "@/components/Hello";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Headphones from "@/components/Headphones";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="space-y-5 md:space-y-6">
        <Hello />
        <Technologies />
      </div>
      <Projects />

      {/* DESKTOP */}
      <div className="flex gap-x-8 max-md:hidden h-full">
        <Gallery />
        <Experience />
      </div>
      {/* MOBILE */}
      <div className="md:hidden space-y-5">
        <div id="experience">
          <Experience />
        </div>
        <div className="">
          <Gallery />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="flex gap-x-8 max-sm:hidden">
        <Headphones />
        <Contact />
      </div>
      {/* MOBILE */}
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
