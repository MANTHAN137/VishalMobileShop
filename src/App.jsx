import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import BrandCatalog from './components/BrandCatalog';
import Location from './components/Location';
import Accessories from './components/Accessories';
import MobileHome from './components/MobileHome';
import MobileContact from './components/MobileContact';

// Desktop Components
const DesktopNavbar = ({ setActiveTab }) => {
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
          <img src="/logo.png" alt="Vishal Mobile" style={{
            width: '45px', height: '45px', borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #D4AF37',
            boxShadow: '0 4px 20px rgba(212,175,55,0.3)'
          }} />
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>Vishal Mobile</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Premium Store</div>
          </div>
        </a>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#home" style={{ fontWeight: '500', fontSize: '0.95rem' }}>Home</a>
          <a href="#products" style={{ fontWeight: '500', fontSize: '0.95rem' }}>Products</a>
          <a href="#catalog" style={{ fontWeight: '500', fontSize: '0.95rem' }}>Brands</a>
          <a href="#accessories" style={{ fontWeight: '500', fontSize: '0.95rem' }}>Accessories</a>
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
      <div className="animate-fade-in-up">
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
            boxShadow: '0 8px 30px rgba(139,92,246,0.4)',
            border: 'none', cursor: 'pointer', color: 'white'
          }}>Browse Collection</a>
          <a href="#location" style={{
            padding: '14px 32px', borderRadius: '12px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.2)',
            fontWeight: '600', fontSize: '1rem',
            cursor: 'pointer', color: 'white'
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
      <div className="animate-float" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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

const Testimonials = () => (
  <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #0a0a0a, #050505)' }}>
    <div className="container">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', fontWeight: '800' }}>
        What Our <span className="gradient-text">Customers Say</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {[
          { name: 'Rahul Sharma', text: 'Got my iPhone 15 Pro here at the best price in Amravati. Excellent service and genuine product!', rating: 5 },
          { name: 'Priya Mehta', text: 'Been buying phones from Vishal Mobile for 5 years. Always trusted and reliable.', rating: 5 },
          { name: 'Amit Kumar', text: 'Quick service, best prices, and they even helped set up my new Samsung. Highly recommend!', rating: 5 }
        ].map((review, i) => (
          <div key={i} className="premium-card" style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px', padding: '30px',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '16px' }}>
              {'★'.repeat(review.rating)}
            </div>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', marginBottom: '20px', lineHeight: '1.7' }}>
              "{review.text}"
            </p>
            <div style={{ fontWeight: '700', fontSize: '1rem' }}>— {review.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
        return <MobileHome setActiveTab={setActiveTab} />;
      case 'products':
        return (
          <div className="animate-fade-in-up" style={{ padding: '20px 0' }}>
            <BrandCatalog />
            <Products />
          </div>
        );
      case 'accessories':
        return (
          <div className="animate-fade-in-up">
            <Accessories />
          </div>
        );
      case 'contact':
        return <MobileContact />;
      default:
        return <MobileHome setActiveTab={setActiveTab} />;
    }
  };

  // Desktop Version
  if (!isMobile) {
    return (
      <div className="App" style={{ background: '#050505', minHeight: '100vh' }}>
        <DesktopNavbar setActiveTab={setActiveTab} />
        <DesktopHero />
        <Products />
        <Accessories />
        <BrandCatalog />
        <Testimonials />
        <Location />
        <Footer />
      </div>
    );
  }

  // Mobile Version
  return (
    <div className="App" style={{ background: '#050505', minHeight: '100vh' }}>
      {/* Premium Mobile Header - Glassmorphism */}
      <header className="glass-effect" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Vishal Mobile" style={{
            width: '42px', height: '42px', borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #D4AF37',
            boxShadow: '0 4px 15px rgba(212,175,55,0.3)'
          }} />
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
            display: 'flex', alignItems: 'center', gap: '6px',
            textDecoration: 'none'
          }}>
          <span>💬</span> Chat
        </a>
      </header>

      {/* Floating Tab Navigation */}
      <nav className="glass-effect" style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        borderRadius: '24px',
        display: 'flex',
        padding: '8px',
        gap: '4px',
        zIndex: 999,
        justifyContent: 'space-between',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
      }}>
        {[
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'products', label: 'Phones', icon: '📱' },
          { id: 'accessories', label: 'Audio', icon: '🎧' },
          { id: 'contact', label: 'Contact', icon: '📍' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '10px 0',
              background: activeTab === tab.id
                ? 'linear-gradient(135deg, #8B5CF6, #6366f1)'
                : 'transparent',
              borderRadius: '16px',
              border: 'none',
              color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.5)',
              fontSize: '0.7rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span style={{ fontSize: '1.2rem', transform: activeTab === tab.id ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>{tab.icon}</span>
            <span style={{ opacity: activeTab === tab.id ? 1 : 0.7 }}>{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main style={{ paddingTop: '70px', paddingBottom: '100px', minHeight: '100vh' }}>
        {renderMobileContent()}
      </main>
    </div>
  );
}

export default App;
