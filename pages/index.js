import Hello from "@/components/Hello";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Headphones from "@/components/Headphones";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hello />
      <Technologies />
      <Projects />
      <div className="flex gap-x-5 max-sm:hidden">
        <Headphones />
        <Contact />
      </div>
      <div className="sm:hidden space-y-5">
        <Headphones />
        <Contact />
      </div>
    </>
  );
}
