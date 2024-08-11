import Footer from "@/components/Footer";
import Gift from "@/components/Gift";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Quotes from "@/components/Quotes";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="text-white">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <Gift />
        <div className="text-white">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <RecentProjects />
        <Quotes />
        <Message />
        <Footer />
      </div>
    </main>
  );
}
