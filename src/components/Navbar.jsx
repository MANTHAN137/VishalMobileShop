import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Vishal Mobile" style={{ height: '50px', width: '50px', objectFit: 'cover', borderRadius: '50%' }} />
          {/* <h1 style={{ fontSize: '1.5rem', fontWeight: '800' }}>
            Vishal<span className="gradient-text">Mobile</span>
          </h1> */}
        </a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#home" style={{ fontWeight: '500' }}>Home</a>
          <a href="#products" style={{ fontWeight: '500' }}>Products</a>
          <a href="#location" style={{ fontWeight: '500' }}>Visit Us</a>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href="https://wa.me/919370763601"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderColor: '#25D366', color: '#25D366' }}
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/badnera_phonewala/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
