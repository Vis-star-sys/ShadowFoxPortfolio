import AboutSection from "@/components/About";
import ContactUs from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectSection";
import ScrollButtons from "@/components/ScrollButtons";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <Skills />
        <ContactUs />
      </main>
      <ScrollButtons />
    </>
  );
}
