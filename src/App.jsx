import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Eagerly loaded — above the fold / needed immediately
import Home from './pages/Home';

// Lazy loaded — only fetched when the user navigates to /portfolio
const AllProjects = lazy(() => import('./pages/AllProjects'));

// Scroll to top or specific hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try scrolling immediately
      if (!scrollToElement()) {
        // If element isn't in DOM yet (e.g. lazy loaded), wait for it
        const observer = new MutationObserver(() => {
          if (scrollToElement()) {
            observer.disconnect();
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        
        // Stop observing after 2.5 seconds to prevent memory leaks
        const timeout = setTimeout(() => observer.disconnect(), 2500);
        
        return () => {
          observer.disconnect();
          clearTimeout(timeout);
        };
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Minimal loading placeholder — prevents layout shift
function PageLoader() {
  return (
    <div
      aria-hidden="true"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<AllProjects />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
