import { About } from "./components/about";
import BackToTop from "./components/back-to-top";
import Hero from "./components/hero";
import Navbar from "./components/navbar/navbar";
import { Projects } from "./components/projects";
import DesktopSkils from "./components/skils/desktop-skils";
import MobileSkills from "./components/skils/mobile-skills";
import { useScrollTop } from "./hooks/use-scroll-top";
import { cn } from "./lib/utils";

const App = () => {
  const { visible } = useScrollTop();
  return (
    <>
      <Navbar />
      <div className="mt-[12rem] mb-12">
        <Hero />
      </div>
      <div id="about" className="relative z-10 mt-[20rem] mb-10">
        <div className="absolute blur-[100px] -z-10 h-full w-full items-center px-5 -py-[40rem] [background:radial-gradient(125%_125%_at_60%_10%,#17171c_50%,#63e_100%)]" />
        <About />
      </div>
      <div id="projects" className="relative z-50 mt-[20rem] mb-10">
        <div className="relative h-[100%] w-full bg-zinc-900" />
        <div className="absolute bottom-0 left-0 -z-10 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="z-50">
          <Projects />
        </div>
      </div>
      <div id="skills" className="relative z-10 mt-[10rem] mb-20">
        <div className="md:block hidden max-w-5xl mx-auto">
          <DesktopSkils />
        </div>
        <div className="block md:hidden">
          <MobileSkills />
        </div>
      </div>
      <div
        className={cn(
          "fixed bottom-5 md:right-10 right-5 translate-y-20 transition-all z-50",
          visible && "translate-y-0"
        )}
      >
        <BackToTop />
      </div>
    </>
  );
};

export default App;
