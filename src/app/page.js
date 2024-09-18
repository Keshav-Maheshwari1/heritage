import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <main className="relative h-full">
      <header className="">
        <NavBar />
      </header>

      <section className=" h-[90svh]">
        <div className="absolute  inset-0 overflow-hidden opacity-80">
          <HeroSection/>
        </div>
        
      </section>
    </main>
  );
}
