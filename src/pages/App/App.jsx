import React from 'react';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Project from '../../components/Project/Project';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import ScrollUp from '../../components/ScrollUp/ScrollUp';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Project />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}