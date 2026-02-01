import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 0' : '1rem 0',
        background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(15px)',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <img src="/VishalMobileShop/logo.png" alt="Vishal Mobile" style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%' }} />
          <span style={{ fontWeight: '700', fontSize: '1rem' }}>Vishal</span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#home" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Home</a>
          <a href="#products" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Products</a>
          <a href="#location" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Visit Us</a>
        </div>

        {/* Desktop Buttons */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href="https://wa.me/919370763601"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', borderColor: '#25D366', color: '#25D366' }}
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/badnera_phonewala/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
          >
            Instagram
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#0a0a0a',
            display: 'flex',
            flexDirection: 'column',
            padding: '5rem 2rem 2rem 2rem',
            gap: '1rem',
            zIndex: 998,
            overflowY: 'auto'
          }}
        >
          <a href="#home" onClick={closeMenu} style={{ fontSize: '1.2rem', fontWeight: '600', padding: '0.5rem 0' }}>Home</a>
          <a href="#products" onClick={closeMenu} style={{ fontSize: '1.2rem', fontWeight: '600', padding: '0.5rem 0' }}>Products</a>
          <a href="#catalog" onClick={closeMenu} style={{ fontSize: '1.2rem', fontWeight: '600', padding: '0.5rem 0' }}>Shop by Brand</a>
          <a href="#location" onClick={closeMenu} style={{ fontSize: '1.2rem', fontWeight: '600', padding: '0.5rem 0' }}>Visit Us</a>

          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="https://wa.me/919370763601"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', borderColor: '#25D366', color: '#25D366', textAlign: 'center' }}
            >
              📱 WhatsApp
            </a>
            <a
              href="https://www.instagram.com/badnera_phonewala/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', textAlign: 'center' }}
            >
              📸 Instagram
            </a>
          </div>

          <div style={{ marginTop: 'auto', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            📞 9370763601 | 7499889672
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
