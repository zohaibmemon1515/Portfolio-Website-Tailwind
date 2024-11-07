
import Hero from "@/app/components/Hero/page";
import AboutMe from "@/app/components/AboutMe/page";
import Services from "@/app/components/Services/page";
import Skills from "@/app/components/Skills/page";
import Projects from "@/app/components/Projects/page";
import Contact from "@/app/components/Contact/page";

export default function Home() {
  return (
    <div>
      <section id="Home">
        <Hero />
      </section>
      <section id="AboutMe">
        <AboutMe />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
