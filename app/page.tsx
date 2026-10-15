import Hero from "@/components/Hero";
import SiteHeader from "@/components/SiteHeader";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
      </main>
    </>
  );
}
