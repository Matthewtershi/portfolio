import Footer from "@/components/Footer";
import Gift from "@/components/Gift";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Quotes from "@/components/Quotes";
import Skills from "@/components/Skills";
import Back from "@/components/Back";
import RecentProjects from "@/components/RecentProjects";
import { StarsCanvas } from "@/components/StarsCanvas";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { Spotlight } from '@/components/ui/Spotlight'

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-8xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        {/* <Skills /> */}
        <Quotes />
        <Message />
        <div className = "relative max-w-10xl mx-auto h-screen bottom-0 z-10">
            <StarsCanvas />
            <Back />
        </div>
        <Footer />

        <div className="relative w-screen">
            <Spotlight className="absolute bottom-0 right-0 h-screen" fill="white" />
            <Spotlight className="absolute bottom-7 right-0 h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="absolute bottom-10 right-0 h-[80vh] w-[50vw]" fill="blue" />
        </div>

      </div>
    </main>
  );
}
