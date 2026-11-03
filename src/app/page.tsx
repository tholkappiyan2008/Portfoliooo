import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Work } from '@/components/sections/Work';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Certificates } from '@/components/sections/Certificates';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Education />
      <Certificates />
      <Contact />
    </>
  );
}
