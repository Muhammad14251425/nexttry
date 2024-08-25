import Hero from "@/components/landingpage/Hero";
import Hero1 from "@/components/landingpage/Hero1";
import Hero2 from "@/components/landingpage/Hero2";
import Hero3 from "@/components/landingpage/Hero3";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </div>
  );
}
