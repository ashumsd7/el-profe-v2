import About from "@/components/home/About";
import CharawanClubs from "@/components/home/NavDrugapoojaSamiti";
import CharawanRepresentatives from "@/components/home/CharawanRepresentatives";
import PeopleStats from "@/components/home/PeopleStats";
import QuickLinkSections from "@/components/home/QuickLinkSections";
import RecentNewsSection from "@/components/home/RecentNewsSection";
import ShortNews from "@/components/home/ShortNews";
import FirstPage from "@/components/home/first-page";
import { Inter } from "next/font/google";
import NavDrugapoojaSamiti from "@/components/home/NavDrugapoojaSamiti";
import CharawanCrcketClub from "@/components/home/CharawanCrcketClub";
export default function Home() {
  return (
    <main className="">
      <FirstPage />
      <ShortNews />
      <PeopleStats />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4  ">
        <RecentNewsSection />
        <QuickLinkSections />
      </div>
      <CharawanRepresentatives />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4  ">
        <NavDrugapoojaSamiti />
        <CharawanCrcketClub />
      </div>

      {/* <About /> */}
    </main>
  );
}
