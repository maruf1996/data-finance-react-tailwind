import React from 'react';
import Analytics from './components/Analytics/Analytics';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import NewsLetter from './NewsLetter/NewsLetter';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <NewsLetter></NewsLetter>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};

export default App;