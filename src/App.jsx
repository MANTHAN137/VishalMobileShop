import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import BrandCatalog from './components/BrandCatalog';
import InstagramFeed from './components/InstagramFeed';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <BrandCatalog />
      <InstagramFeed />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
