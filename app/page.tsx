import Hero from "@/components/Hero";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import { navItems } from "@/data";
import About from "@/components/About";
import FloatingNav from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import PortfolioTabs from "@/components/PortfolioTabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <RecentProjects /> */}
        <About />
        <PortfolioTabs />
        <Footer />
      </div>
    </main>
  );
}
