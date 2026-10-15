import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SiteHeader from "@/components/SiteHeader";
import Solution from "@/components/Solution";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <Problem />
        <Solution />
      </main>
    </>
  );
}
