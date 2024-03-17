import React from 'react';
import Hero from './componentsHero/Hero';
import Features from './componentsFeatures/Features';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Footer></Footer>
    </>
  );
}
