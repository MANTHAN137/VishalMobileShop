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

  const renderMobileContent = () => {
    switch (activeTab) {
      case 'home':
        return <MobileHome />;
      case 'products':
        return (
          <div>
            <Products />
            <BrandCatalog />
          </div>
        );
      case 'contact':
        return (
          <div>
            <Location />
            <MobileContact />
          </div>
        );
      default:
        return <MobileHome />;
    }
  };

  // Desktop Version
  if (!isMobile) {
    return (
      <div className="App" style={{ background: '#050505', minHeight: '100vh' }}>
        <DesktopNavbar />
        <DesktopHero />
        <Products />
        <BrandCatalog />
        <Location />
        <Footer />
      </div>
    );
  }

  // Mobile Version
  return (
    <div className="App" style={{ background: '#050505', minHeight: '100vh' }}>
      {/* Premium Mobile Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(180deg, rgba(5,5,5,1) 0%, rgba(5,5,5,0.95) 100%)',
        backdropFilter: 'blur(20px)',
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(212,175,55,0.3)'
          }}>
            <span style={{ fontSize: '1.2rem' }}>📱</span>
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', letterSpacing: '-0.02em' }}>Vishal Mobile</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', marginTop: '-2px' }}>Premium Store</div>
          </div>
        </div>
        <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: 'white', padding: '8px 16px', borderRadius: '8px',
            fontSize: '0.8rem', fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}>
          <span>💬</span> Chat
        </a>
      </header>

      {/* Premium Tab Navigation */}
      <nav style={{
        position: 'fixed',
        top: '62px',
        left: 0,
        right: 0,
        background: 'rgba(10,10,10,0.98)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        padding: '8px 12px',
        gap: '8px',
        zIndex: 999,
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {[
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'products', label: 'Products', icon: '📱' },
          { id: 'contact', label: 'Contact', icon: '📍' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '10px 8px',
              background: activeTab === tab.id
                ? 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.1))'
                : 'rgba(255,255,255,0.03)',
              border: activeTab === tab.id
                ? '1px solid rgba(139,92,246,0.3)'
                : '1px solid transparent',
              borderRadius: '10px',
              color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.5)',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <main style={{ paddingTop: '130px', minHeight: '100vh', background: '#050505' }}>
        {renderMobileContent()}
      </main>

      <Footer />
    </div>
  );
}

// Premium Mobile Home
const MobileHome = () => (
  <div style={{ padding: '0 16px 24px' }}>
    {/* Hero Card */}
    <div style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      borderRadius: '20px',
      padding: '24px 20px',
      marginBottom: '20px',
      border: '1px solid rgba(255,255,255,0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: '-30px', right: '-30px',
        width: '120px', height: '120px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent)',
        borderRadius: '50%', filter: 'blur(30px)'
      }} />

      <span style={{
        display: 'inline-block',
        padding: '6px 12px',
        background: 'rgba(212,175,55,0.15)',
        border: '1px solid rgba(212,175,55,0.3)',
        borderRadius: '20px',
        fontSize: '0.7rem',
        color: '#D4AF37',
        fontWeight: '600',
        marginBottom: '16px'
      }}>
        ✨ #1 Mobile Shop in Badnera
      </span>

      <h1 style={{ fontSize: '1.6rem', marginBottom: '10px', lineHeight: '1.2', fontWeight: '800' }}>
        Your Trusted<br />
        <span style={{
          background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #D4AF37)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Mobile Partner</span>
      </h1>

      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.5' }}>
        Premium smartphones at unbeatable prices. Original products with warranty.
      </p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <a href="https://wa.me/919370763601"
          style={{
            flex: 1, padding: '12px',
            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
            borderRadius: '10px', textAlign: 'center',
            fontSize: '0.85rem', fontWeight: '600',
            boxShadow: '0 4px 20px rgba(139,92,246,0.4)'
          }}>
          💬 Get Quote
        </a>
        <a href="https://www.instagram.com/badnera_phonewala" target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1, padding: '12px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '10px', textAlign: 'center',
            fontSize: '0.85rem', fontWeight: '600'
          }}>
          📸 Instagram
        </a>
      </div>
    </div>

    {/* Stats Bar */}
    <div style={{
      display: 'flex', gap: '10px', marginBottom: '20px'
    }}>
      {[
        { value: '5000+', label: 'Happy Customers' },
        { value: '50+', label: 'Phone Models' },
        { value: '5★', label: 'Rating' }
      ].map((stat, i) => (
        <div key={i} style={{
          flex: 1, background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px', padding: '14px 8px', textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#D4AF37' }}>{stat.value}</div>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Features Grid */}
    <h3 style={{ fontSize: '0.9rem', marginBottom: '12px', fontWeight: '700' }}>Why Choose Us</h3>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
      {[
        { icon: '✅', title: '100% Original', desc: 'Genuine products only' },
        { icon: '🏷️', title: 'Best Prices', desc: 'Market lowest rates' },
        { icon: '🔧', title: 'Free Service', desc: '1 year support' },
        { icon: '🚚', title: 'Home Delivery', desc: 'Free in Badnera' }
      ].map((item, i) => (
        <div key={i} style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '14px', padding: '16px 12px'
        }}>
          <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{item.icon}</div>
          <div style={{ fontWeight: '700', fontSize: '0.85rem', marginBottom: '4px' }}>{item.title}</div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</div>
        </div>
      ))}
    </div>

    {/* Brand Logos */}
    <h3 style={{ fontSize: '0.9rem', marginBottom: '12px', fontWeight: '700' }}>Authorized Dealer</h3>
    <div style={{
      display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px'
    }}>
      {['Apple', 'Samsung', 'OnePlus', 'Vivo', 'Oppo', 'Realme', 'iQOO', 'Poco'].map(brand => (
        <span key={brand} style={{
          padding: '8px 14px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          fontSize: '0.75rem',
          fontWeight: '600'
        }}>
          {brand}
        </span>
      ))}
    </div>

    {/* Instagram CTA */}
    <a href="https://www.instagram.com/badnera_phonewala" target="_blank" rel="noopener noreferrer"
      style={{
        display: 'block',
        background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
        padding: '16px',
        borderRadius: '14px',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '0.9rem',
        boxShadow: '0 4px 20px rgba(253,29,29,0.3)'
      }}>
      📸 Follow @badnera_phonewala for Latest Updates
    </a>
  </div>
);

// Mobile Contact Section
const MobileContact = () => (
  <div style={{ padding: '20px 16px' }}>
    <h3 style={{ fontSize: '1rem', marginBottom: '16px', fontWeight: '700' }}>Quick Connect</h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <a href="tel:9370763601" style={{
        display: 'flex', alignItems: 'center', gap: '14px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '16px', borderRadius: '14px'
      }}>
        <div style={{
          width: '45px', height: '45px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem'
        }}>📞</div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '1rem' }}>9370763601</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Primary Number • Tap to Call</div>
        </div>
      </a>

      <a href="tel:7499889672" style={{
        display: 'flex', alignItems: 'center', gap: '14px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '16px', borderRadius: '14px'
      }}>
        <div style={{
          width: '45px', height: '45px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #2196F3, #1565C0)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem'
        }}>📱</div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '1rem' }}>7499889672</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Secondary Number • Tap to Call</div>
        </div>
      </a>

      <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: '14px',
        background: 'linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.05))',
        border: '1px solid rgba(37,211,102,0.3)',
        padding: '16px', borderRadius: '14px'
      }}>
        <div style={{
          width: '45px', height: '45px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem'
        }}>💬</div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '1rem', color: '#25D366' }}>Chat on WhatsApp</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Get Instant Response</div>
        </div>
      </a>
    </div>

    {/* Business Hours */}
    <div style={{
      marginTop: '20px', padding: '16px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '14px'
    }}>
      <div style={{ fontWeight: '700', marginBottom: '10px', fontSize: '0.9rem' }}>🕐 Business Hours</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
        <span>Mon - Sat</span>
        <span style={{ fontWeight: '600' }}>10:00 AM - 9:00 PM</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '6px' }}>
        <span>Sunday</span>
        <span style={{ fontWeight: '600' }}>11:00 AM - 6:00 PM</span>
      </div>
    </div>
  </div>
);

// Desktop Navbar
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
      padding: scrolled ? '12px 0' : '16px 0',
      background: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '45px', height: '45px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(212,175,55,0.3)',
            fontSize: '1.4rem'
          }}>📱</div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>Vishal Mobile</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Premium Store</div>
          </div>
        </a>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#home" style={{ fontWeight: '500', fontSize: '0.95rem' }}>Home</a>
          <a href="#products" style={{ fontWeight: '500', fontSize: '0.95rem' }}>Products</a>
          <a href="#catalog" style={{ fontWeight: '500', fontSize: '0.95rem' }}>Brands</a>
          <a href="#location" style={{ fontWeight: '500', fontSize: '0.95rem' }}>Visit Us</a>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer"
            style={{
              padding: '10px 20px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              fontWeight: '600', fontSize: '0.9rem',
              boxShadow: '0 4px 20px rgba(37,211,102,0.3)'
            }}>💬 WhatsApp</a>
          <a href="https://www.instagram.com/badnera_phonewala" target="_blank" rel="noopener noreferrer"
            style={{
              padding: '10px 20px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #833ab4, #fd1d1d)',
              fontWeight: '600', fontSize: '0.9rem',
              boxShadow: '0 4px 20px rgba(253,29,29,0.3)'
            }}>📸 Instagram</a>
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
    background: 'linear-gradient(135deg, #050505 0%, #0a0a1a 50%, #050505 100%)'
  }}>
    {/* Background Glow */}
    <div style={{
      position: 'absolute', top: '10%', right: '20%', width: '500px', height: '500px',
      background: 'radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)',
      filter: 'blur(80px)'
    }} />
    <div style={{
      position: 'absolute', bottom: '10%', left: '10%', width: '400px', height: '400px',
      background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)',
      filter: 'blur(80px)'
    }} />

    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <div>
        <span style={{
          display: 'inline-block', padding: '8px 16px',
          background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)',
          borderRadius: '30px', color: '#D4AF37', fontWeight: '600', fontSize: '0.9rem', marginBottom: '24px'
        }}>✨ #1 Mobile Shop in Badnera</span>

        <h1 style={{ fontSize: '3.8rem', lineHeight: '1.1', marginBottom: '24px', fontWeight: '800' }}>
          Your Trusted<br />
          <span style={{
            background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #D4AF37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Mobile Partner</span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.15rem', marginBottom: '32px', maxWidth: '500px', lineHeight: '1.7' }}>
          Premium smartphones at unbeatable prices. Experience genuine products with warranty and exceptional after-sales service.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
          <a href="#products" style={{
            padding: '14px 32px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
            fontWeight: '700', fontSize: '1rem',
            boxShadow: '0 8px 30px rgba(139,92,246,0.4)'
          }}>Browse Collection</a>
          <a href="#location" style={{
            padding: '14px 32px', borderRadius: '12px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.2)',
            fontWeight: '600', fontSize: '1rem'
          }}>Visit Store</a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {[
            { value: '5000+', label: 'Happy Customers' },
            { value: '50+', label: 'Phone Models' },
            { value: '5★', label: 'Google Rating' }
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#D4AF37' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone Mockup */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          width: '300px', height: '580px',
          background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
          borderRadius: '45px', border: '3px solid rgba(255,255,255,0.1)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
          position: 'relative', overflow: 'hidden'
        }}>
          {/* Screen */}
          <div style={{
            position: 'absolute', top: '15px', left: '15px', right: '15px', bottom: '15px',
            background: 'linear-gradient(180deg, #1a1a2e, #16213e)',
            borderRadius: '35px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📱</div>
            <div style={{ fontWeight: '800', fontSize: '1.3rem' }}>VISHAL</div>
            <div style={{ fontWeight: '600', color: '#D4AF37', fontSize: '0.9rem' }}>MOBILE</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer style={{
    background: 'linear-gradient(180deg, #0a0a0a, #050505)',
    padding: '24px 16px',
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.05)'
  }}>
    <div style={{ marginBottom: '12px' }}>
      <span style={{ fontWeight: '700' }}>Vishal Mobile Shopee</span>
      <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>|</span>
      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Badnera, Amravati</span>
    </div>
    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
      © 2026 All Rights Reserved
    </p>
  </footer>
);

export default App;
