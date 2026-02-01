import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import BrandCatalog from './components/BrandCatalog';
import Location from './components/Location';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile Tab Content
  const renderMobileContent = () => {
    switch (activeTab) {
      case 'home':
        return <MobileHome />;
      case 'products':
        return (
          <div style={{ paddingTop: '60px' }}>
            <Products />
            <BrandCatalog />
          </div>
        );
      case 'contact':
        return (
          <div style={{ paddingTop: '60px' }}>
            <Location />
            <MobileContact />
          </div>
        );
      default:
        return <MobileHome />;
    }
  };

  // Desktop Version (original scrolling layout)
  if (!isMobile) {
    return (
      <div className="App">
        <DesktopNavbar />
        <DesktopHero />
        <Products />
        <BrandCatalog />
        <Location />
        <Footer />
      </div>
    );
  }

  // Mobile Version (tab-based)
  return (
    <div className="App">
      {/* Mobile Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#0a0a0a',
        padding: '0.75rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/VishalMobileShop/logo.png" alt="Logo" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
          <span style={{ fontWeight: '700', fontSize: '1rem' }}>Vishal Mobile</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer"
            style={{ background: '#25D366', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '600' }}>
            WhatsApp
          </a>
        </div>
      </header>

      {/* Mobile Tab Navigation */}
      <nav style={{
        position: 'fixed',
        top: '52px',
        left: 0,
        right: 0,
        background: '#111',
        display: 'flex',
        zIndex: 999,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        {[
          { id: 'home', label: '🏠 Home' },
          { id: 'products', label: '📱 Products' },
          { id: 'contact', label: '📍 Contact' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '12px',
              background: activeTab === tab.id ? 'rgba(139,92,246,0.2)' : 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid var(--primary)' : '2px solid transparent',
              color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.6)',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {renderMobileContent()}
      </main>

      {/* Mobile Footer */}
      <footer style={{ background: '#0a0a0a', padding: '1.5rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>© 2026 Vishal Mobile Shopee</p>
      </footer>
    </div>
  );
}

// Mobile Home Tab Content
const MobileHome = () => (
  <div style={{ padding: '1.5rem' }}>
    {/* Welcome Section */}
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <span style={{
        display: 'inline-block',
        padding: '6px 12px',
        background: 'rgba(139,92,246,0.15)',
        borderRadius: '20px',
        fontSize: '0.75rem',
        color: 'var(--primary)',
        marginBottom: '1rem'
      }}>
        #1 Mobile Shop in Badnera
      </span>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', lineHeight: '1.2' }}>
        Upgrade Your<br /><span className="gradient-text">Digital Lifestyle</span>
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Best prices on latest smartphones
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
        <a href="https://wa.me/919370763601" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          💬 Chat Now
        </a>
        <a href="https://www.instagram.com/badnera_phonewala" target="_blank" rel="noopener noreferrer"
          className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          📸 Instagram
        </a>
      </div>
    </div>

    {/* Quick Highlights */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
      {[
        { icon: '📱', label: 'Latest Phones', desc: 'All Brands' },
        { icon: '💰', label: 'Best Prices', desc: 'Guaranteed' },
        { icon: '✅', label: 'Original', desc: 'Products' },
        { icon: '🔧', label: 'Service', desc: 'Support' }
      ].map((item, i) => (
        <div key={i} style={{
          background: 'rgba(255,255,255,0.05)',
          padding: '1rem',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
          <div style={{ fontWeight: '600', fontSize: '0.85rem' }}>{item.label}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>{item.desc}</div>
        </div>
      ))}
    </div>

    {/* Popular Brands */}
    <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Popular Brands</h3>
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
      {['Apple', 'Samsung', 'OnePlus', 'Vivo', 'Oppo', 'Realme', 'iQOO', 'Poco'].map(brand => (
        <span key={brand} style={{
          padding: '8px 16px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '500'
        }}>
          {brand}
        </span>
      ))}
    </div>

    {/* Instagram Preview */}
    <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Follow Us @badnera_phonewala</h3>
    <a href="https://www.instagram.com/badnera_phonewala" target="_blank" rel="noopener noreferrer"
      style={{
        display: 'block',
        background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)',
        padding: '1rem',
        borderRadius: '12px',
        textAlign: 'center',
        color: 'white',
        fontWeight: '600'
      }}>
      📸 View Our Instagram Reels
    </a>
  </div>
);

// Mobile Contact Section
const MobileContact = () => (
  <div style={{ padding: '1.5rem' }}>
    <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Quick Contact</h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <a href="tel:9370763601" style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <span style={{ fontSize: '1.5rem' }}>📞</span>
        <div>
          <div style={{ fontWeight: '600' }}>9370763601</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Tap to call</div>
        </div>
      </a>
      <a href="tel:7499889672" style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <span style={{ fontSize: '1.5rem' }}>📞</span>
        <div>
          <div style={{ fontWeight: '600' }}>7499889672</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Tap to call</div>
        </div>
      </a>
      <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        background: 'rgba(37,211,102,0.15)', padding: '1rem', borderRadius: '12px',
        border: '1px solid rgba(37,211,102,0.3)'
      }}>
        <span style={{ fontSize: '1.5rem' }}>💬</span>
        <div>
          <div style={{ fontWeight: '600', color: '#25D366' }}>WhatsApp</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Chat with us</div>
        </div>
      </a>
    </div>
  </div>
);

// Desktop Navbar (original)
const DesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: scrolled ? '0.75rem 0' : '1rem 0',
      background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(15px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/VishalMobileShop/logo.png" alt="Logo" style={{ height: '40px', width: '40px', borderRadius: '50%' }} />
          <span style={{ fontWeight: '700' }}>Vishal Mobile</span>
        </a>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#home" style={{ fontWeight: '500' }}>Home</a>
          <a href="#products" style={{ fontWeight: '500' }}>Products</a>
          <a href="#location" style={{ fontWeight: '500' }}>Visit Us</a>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer"
            className="btn btn-outline" style={{ padding: '0.5rem 1rem', borderColor: '#25D366', color: '#25D366' }}>WhatsApp</a>
          <a href="https://www.instagram.com/badnera_phonewala" target="_blank" rel="noopener noreferrer"
            className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Instagram</a>
        </div>
      </div>
    </nav>
  );
};

// Desktop Hero
const DesktopHero = () => (
  <section id="home" style={{
    minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative',
    paddingTop: '80px',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
  }}>
    <div style={{
      position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px',
      background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
      filter: 'blur(60px)'
    }} />
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <div>
        <span style={{
          display: 'inline-block', padding: '0.5rem 1rem',
          background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)',
          borderRadius: '99px', color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem'
        }}>#1 Mobile Shop in Badnera</span>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
          Upgrade Your <br /><span className="gradient-text">Digital Lifestyle</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px' }}>
          Discover the latest smartphones and premium accessories at Vishal Mobile Shopee.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#products" className="btn btn-primary">Browse Collection</a>
          <a href="#location" className="btn btn-outline">Visit Store</a>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: '280px', height: '500px',
          background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
          borderRadius: '40px', border: '2px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '3rem'
        }}>📱</div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer style={{ background: '#0a0a0a', padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>© 2026 Vishal Mobile Shopee. All rights reserved.</p>
  </footer>
);

export default App;
