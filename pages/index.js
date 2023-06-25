import Hello from "@/components/Hello";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Headphones from "@/components/Headphones";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hello />
      <Technologies />
      <Projects />
      <Gallery />
      <div className="flex gap-x-5 max-sm:hidden">
        <Headphones />
        <Contact />
      </div>
      <div className="sm:hidden">
        <div className="mb-6">
          <Headphones />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}
