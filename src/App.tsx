import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Frameworks from './components/Frameworks';
import Customers from './components/Customers';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Frameworks />
      <Customers />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;