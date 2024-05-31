import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
