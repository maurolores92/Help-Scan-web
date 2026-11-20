import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Features } from './components/Features';
import { DemosSection } from './components/DemosSection';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DemoRequestModal } from './components/DemoRequestModal';
import { TechBackgroundCanvas } from './components/TechBackgroundCanvas';

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [selectedDemoTitle, setSelectedDemoTitle] = useState<string | null>(null);

  const handleRequestDemo = (demoTitle?: string) => {
    setSelectedDemoTitle(typeof demoTitle === 'string' ? demoTitle : null);
    setDemoModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <TechBackgroundCanvas />
      <Navbar onRequestDemo={() => handleRequestDemo()} />
      <main style={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
        <Hero onRequestDemo={() => handleRequestDemo()} />
        <AboutUs />
        <Features />
        <DemosSection onRequestDemo={handleRequestDemo} />
        <CtaBanner onRequestDemo={() => handleRequestDemo()} />
        <Contact />
      </main>
      <Footer />
      <DemoRequestModal
        isOpen={demoModalOpen}
        selectedDemo={selectedDemoTitle}
        onClose={() => {
          setDemoModalOpen(false);
          setSelectedDemoTitle(null);
        }}
      />
    </div>
  );
}

export default App;

