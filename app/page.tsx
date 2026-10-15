import ClosingStatement from "@/components/ClosingStatement";
import Features from "@/components/Features";
import FinalCta from "@/components/FinalCta";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Problem from "@/components/Problem";
import SiteFooter from "@/components/SiteFooter";
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
        <HowItWorks />
        <Features />
        <ClosingStatement />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
