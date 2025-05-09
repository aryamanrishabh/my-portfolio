"use client";

import Hero from "@/components/Hero";
import FloatingNav from "@/components/ui/FloatingNav";
import StackAnimation from "@/components/StackAnimation";

import Grid from "@/components/Grid";
import Contact from "@/components/Contact";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav />
        <Hero />
        <Grid />
        <StackAnimation />
        <WorkExperience />
        <Contact />
      </div>
    </main>
  );
}
