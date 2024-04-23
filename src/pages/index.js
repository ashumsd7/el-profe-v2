import About from "@/components/home/About";
import QuickLinkSections from "@/components/home/QuickLinkSections";
import RecentNewsSection from "@/components/home/RecentNewsSection";
import FirstPage from "@/components/home/first-page";
import { Inter } from "next/font/google";
export default function Home() {
  return (
    <main className="">
      <FirstPage />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4 ">
        <RecentNewsSection />
        <QuickLinkSections />
        <About />
      </div>
    </main>
  );
}
