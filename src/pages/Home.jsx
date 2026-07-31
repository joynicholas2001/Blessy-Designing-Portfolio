import React, { lazy, Suspense } from 'react';

// Hero is above-fold (LCP element) — always eager
import Hero from '../components/Hero';

// All below-fold sections are lazy — loaded after the hero paints
const About    = lazy(() => import('../components/About'));
const Skills   = lazy(() => import('../components/Skills'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Services  = lazy(() => import('../components/Services'));
const Contact   = lazy(() => import('../components/Contact'));

// Invisible placeholder preserves scroll height while chunk loads
function SectionSkeleton() {
  return <div style={{ minHeight: '200px' }} aria-hidden="true" />;
}

export default function Home() {
  return (
    <main>
      {/* Hero renders immediately — everything else is deferred */}
      <Hero />

      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        {/* limit={4} shows only 4 items on the home page */}
        <Portfolio limit={4} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </main>
  );
}
