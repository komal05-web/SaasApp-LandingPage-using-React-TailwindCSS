import React from 'react';
import { Header, Hero, About, Benefits, Integrations, Pricing, Faqs, CTA, Footer, Testimonials } from './exports';

const App = () => {
  return (
    <div className='bg-[#07090F] h-auto font-[inter] overflow-x-hidden'>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Integrations />
      <Pricing />
      <Faqs /> 
      
      
      <Testimonials /> 
      <CTA />
      <Footer />
    </div>
  );
};

export default App;