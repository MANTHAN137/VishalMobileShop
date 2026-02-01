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
        <style>{globalStyles}</style>
        <DesktopNavbar />
        <DesktopHero />
        <TrustBadges />
        <Products />
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
      <style>{globalStyles}</style>

      {/* Premium Mobile Header */}
      <header className="glass-header" style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        background: 'rgba(5,5,5,0.9)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        padding: '10px 16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="logo-pulse" style={{
            width: '40px', height: '40px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(212,175,55,0.4)'
          }}>
            <span style={{ fontSize: '1.3rem' }}>📱</span>
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1rem', letterSpacing: '-0.02em' }}>Vishal Mobile</div>
            <div style={{ fontSize: '0.6rem', color: '#D4AF37', fontWeight: '600' }}>★ Premium Store</div>
          </div>
        </div>
        <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer"
          className="pulse-btn" style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: 'white', padding: '10px 18px', borderRadius: '10px',
            fontSize: '0.85rem', fontWeight: '700',
            boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}>
          💬 Chat
        </a>
      </header>

      {/* Premium Tab Navigation */}
      <nav style={{
        position: 'fixed', top: '60px', left: 0, right: 0,
        background: 'rgba(8,8,8,0.98)',
        backdropFilter: 'blur(20px)',
        display: 'flex', padding: '6px 10px', gap: '6px',
        zIndex: 999,
        borderBottom: '1px solid rgba(255,255,255,0.04)'
      }}>
        {[
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'products', label: 'Shop', icon: '📱' },
          { id: 'contact', label: 'Contact', icon: '📍' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? 'tab-active' : 'tab-inactive'}
            style={{
              flex: 1, padding: '10px 6px',
              background: activeTab === tab.id
                ? 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(212,175,55,0.15))'
                : 'rgba(255,255,255,0.02)',
              border: activeTab === tab.id
                ? '1px solid rgba(139,92,246,0.4)'
                : '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.4)',
              fontSize: '0.75rem', fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '3px'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      <main style={{ paddingTop: '125px', minHeight: '100vh', background: '#050505' }}>
        {renderMobileContent()}
      </main>

      <Footer />
    </div>
  );
}

// Global Styles with Animations
const globalStyles = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(139,92,246,0.3); }
    50% { box-shadow: 0 0 40px rgba(139,92,246,0.5); }
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .logo-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .pulse-btn:active {
    transform: scale(0.95);
  }
  
  .card-hover {
    transition: all 0.3s ease;
  }
  
  .card-hover:active {
    transform: scale(0.98);
  }
  
  .shimmer-text {
    background: linear-gradient(90deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
  }
  
  .float-animation {
    animation: float 4s ease-in-out infinite;
  }
  
  .slide-in {
    animation: slideIn 0.5s ease forwards;
  }
`;

// Premium Mobile Home
const MobileHome = () => {
  const [currentOffer, setCurrentOffer] = useState(0);
  const offers = [
    { text: "🔥 iPhone 15 Pro - Best Price in Town!", color: "#8B5CF6" },
    { text: "💰 Exchange Offer - Get ₹5000 Extra!", color: "#D4AF37" },
    { text: "🎁 Free Accessories with Samsung S24!", color: "#06B6D4" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '0 12px 24px' }}>
      {/* Animated Offer Banner */}
      <div className="slide-in" style={{
        background: `linear-gradient(135deg, ${offers[currentOffer].color}22, ${offers[currentOffer].color}11)`,
        border: `1px solid ${offers[currentOffer].color}44`,
        borderRadius: '12px', padding: '12px 16px',
        marginBottom: '16px', textAlign: 'center',
        transition: 'all 0.5s ease'
      }}>
        <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>{offers[currentOffer].text}</div>
      </div>

      {/* Premium Hero Card */}
      <div className="card-hover" style={{
        background: 'linear-gradient(145deg, #12122a 0%, #1a1a35 50%, #0f1628 100%)',
        borderRadius: '24px', padding: '24px 20px',
        marginBottom: '16px',
        border: '1px solid rgba(139,92,246,0.15)',
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>
        {/* Animated Glow */}
        <div className="float-animation" style={{
          position: 'absolute', top: '-50px', right: '-50px',
          width: '150px', height: '150px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent)',
          borderRadius: '50%', filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute', bottom: '-30px', left: '-30px',
          width: '100px', height: '100px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent)',
          borderRadius: '50%', filter: 'blur(30px)'
        }} />

        <span style={{
          display: 'inline-block', padding: '6px 14px',
          background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.1))',
          border: '1px solid rgba(212,175,55,0.4)',
          borderRadius: '20px', fontSize: '0.7rem',
          color: '#D4AF37', fontWeight: '700',
          marginBottom: '16px'
        }}>
          ✨ Trusted by 5000+ Customers
        </span>

        <h1 style={{ fontSize: '1.8rem', marginBottom: '8px', lineHeight: '1.15', fontWeight: '900' }}>
          Your Premium<br />
          <span className="shimmer-text">Mobile Destination</span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.5' }}>
          Original smartphones • Best prices • Lifetime support
        </p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="https://wa.me/919370763601?text=Hi! I want to enquire about phones"
            className="card-hover" style={{
              flex: 1, padding: '14px',
              background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
              borderRadius: '12px', textAlign: 'center',
              fontSize: '0.9rem', fontWeight: '700',
              boxShadow: '0 8px 30px rgba(139,92,246,0.4)'
            }}>
            💬 Get Quote
          </a>
          <a href="tel:9370763601"
            className="card-hover" style={{
              flex: 1, padding: '14px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '12px', textAlign: 'center',
              fontSize: '0.9rem', fontWeight: '700'
            }}>
            📞 Call Now
          </a>
        </div>
      </div>

      {/* Animated Stats */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {[
          { value: '5000+', label: 'Happy Customers', icon: '😊' },
          { value: '50+', label: 'Phone Brands', icon: '📱' },
          { value: '8+', label: 'Years Trust', icon: '🏆' }
        ].map((stat, i) => (
          <div key={i} className="card-hover" style={{
            flex: 1,
            background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px', padding: '16px 8px', textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{stat.icon}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#D4AF37' }}>{stat.value}</div>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Special Offers Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(244,63,94,0.05))',
        border: '1px solid rgba(244,63,94,0.3)',
        borderRadius: '16px', padding: '16px', marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span style={{ fontSize: '1.2rem' }}>🎉</span>
          <span style={{ fontWeight: '800', fontSize: '0.95rem' }}>Today's Special Offers</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            "Free Screen Guard on all phones",
            "EMI starting ₹999/month",
            "Old phone exchange available"
          ].map((offer, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem' }}>
              <span style={{ color: '#25D366' }}>✓</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{offer}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us - Premium Cards */}
      <h3 style={{ fontSize: '1rem', marginBottom: '12px', fontWeight: '800' }}>Why Choose Us</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
        {[
          { icon: '✅', title: '100% Original', desc: 'Sealed box only', gradient: 'linear-gradient(135deg, #10B981, #059669)' },
          { icon: '🏷️', title: 'Best Prices', desc: 'Price match guarantee', gradient: 'linear-gradient(135deg, #D4AF37, #B8860B)' },
          { icon: '🛡️', title: 'Warranty', desc: 'Full brand warranty', gradient: 'linear-gradient(135deg, #8B5CF6, #6366F1)' },
          { icon: '🚀', title: 'Fast Service', desc: 'Same day delivery', gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)' }
        ].map((item, i) => (
          <div key={i} className="card-hover" style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px', padding: '16px 14px',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: item.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', marginBottom: '10px',
              boxShadow: `0 4px 15px ${item.gradient.includes('#D4AF37') ? 'rgba(212,175,55,0.3)' : 'rgba(0,0,0,0.2)'}`
            }}>{item.icon}</div>
            <div style={{ fontWeight: '800', fontSize: '0.85rem', marginBottom: '4px' }}>{item.title}</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Quick Reviews */}
      <h3 style={{ fontSize: '1rem', marginBottom: '12px', fontWeight: '800' }}>Customer Reviews</h3>
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '16px' }}>
        {[
          { name: 'Rahul S.', text: 'Best prices in Badnera! Got my iPhone here.', rating: 5 },
          { name: 'Priya M.', text: 'Excellent service and genuine products.', rating: 5 },
          { name: 'Amit K.', text: 'Trusted shop. Buying here for 5 years.', rating: 5 }
        ].map((review, i) => (
          <div key={i} style={{
            minWidth: '220px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px', padding: '14px'
          }}>
            <div style={{ color: '#D4AF37', fontSize: '0.8rem', marginBottom: '8px' }}>
              {'★'.repeat(review.rating)}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', lineHeight: '1.4' }}>
              "{review.text}"
            </p>
            <div style={{ fontSize: '0.75rem', fontWeight: '700' }}>— {review.name}</div>
          </div>
        ))}
      </div>

      {/* Brand Grid */}
      <h3 style={{ fontSize: '1rem', marginBottom: '12px', fontWeight: '800' }}>Authorized Dealer</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {[
          { name: 'Apple', color: '#A3AAAE' },
          { name: 'Samsung', color: '#1428A0' },
          { name: 'OnePlus', color: '#F5010C' },
          { name: 'Vivo', color: '#415FFF' },
          { name: 'Oppo', color: '#1BA260' },
          { name: 'Realme', color: '#F3C600' },
          { name: 'iQOO', color: '#FF6600' },
          { name: 'Poco', color: '#FFD700' }
        ].map(brand => (
          <span key={brand.name} className="card-hover" style={{
            padding: '10px 16px',
            background: `linear-gradient(135deg, ${brand.color}22, ${brand.color}11)`,
            border: `1px solid ${brand.color}44`,
            borderRadius: '10px', fontSize: '0.8rem', fontWeight: '700'
          }}>
            {brand.name}
          </span>
        ))}
      </div>

      {/* Instagram CTA */}
      <a href="https://www.instagram.com/badnera_phonewala" target="_blank" rel="noopener noreferrer"
        className="card-hover" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
          padding: '16px', borderRadius: '16px',
          fontWeight: '800', fontSize: '0.95rem',
          boxShadow: '0 8px 30px rgba(253,29,29,0.3)',
          marginBottom: '10px'
        }}>
        <span style={{ fontSize: '1.3rem' }}>📸</span>
        Follow for Daily Updates!
      </a>
    </div>
  );
};

// Mobile Contact Section
const MobileContact = () => (
  <div style={{ padding: '16px 12px' }}>
    <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', fontWeight: '800' }}>Quick Connect</h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {[
        { icon: '📞', num: '9370763601', label: 'Primary • Tap to Call', color: '#4CAF50', href: 'tel:9370763601' },
        { icon: '📱', num: '7499889672', label: 'Secondary • Tap to Call', color: '#2196F3', href: 'tel:7499889672' },
        { icon: '💬', num: 'WhatsApp Chat', label: 'Get Instant Response', color: '#25D366', href: 'https://wa.me/919370763601' }
      ].map((item, i) => (
        <a key={i} href={item.href} target={item.href.includes('wa.me') ? '_blank' : undefined}
          rel="noopener noreferrer" className="card-hover" style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '16px', borderRadius: '16px'
          }}>
          <div style={{
            width: '50px', height: '50px', borderRadius: '14px',
            background: `linear-gradient(135deg, ${item.color}, ${item.color}AA)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem', boxShadow: `0 4px 20px ${item.color}44`
          }}>{item.icon}</div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.05rem', color: item.color === '#25D366' ? '#25D366' : 'white' }}>{item.num}</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.label}</div>
          </div>
        </a>
      ))}
    </div>

    {/* Business Hours */}
    <div style={{
      marginTop: '20px', padding: '18px',
      background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.02))',
      border: '1px solid rgba(212,175,55,0.2)',
      borderRadius: '16px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', marginBottom: '14px' }}>
        <span style={{ fontSize: '1.2rem' }}>🕐</span>
        <span>Business Hours</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { day: 'Mon - Sat', time: '10:00 AM - 9:00 PM' },
          { day: 'Sunday', time: '11:00 AM - 6:00 PM' }
        ].map((h, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>{h.day}</span>
            <span style={{ fontWeight: '700', color: '#D4AF37' }}>{h.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Desktop Components
const TrustBadges = () => (
  <section style={{ padding: '40px 0', background: 'rgba(255,255,255,0.02)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
      {[
        { icon: '✅', text: '100% Original Products' },
        { icon: '🏆', text: '8+ Years Experience' },
        { icon: '⭐', text: '5000+ Happy Customers' },
        { icon: '🛡️', text: 'Full Warranty Support' },
        { icon: '🚚', text: 'Free Home Delivery' }
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)' }}>
          <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
          <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>{item.text}</span>
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #0a0a0a, #050505)' }}>
    <div className="container">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', fontWeight: '800' }}>
        What Our <span className="shimmer-text">Customers Say</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {[
          { name: 'Rahul Sharma', text: 'Got my iPhone 15 Pro here at the best price in Amravati. Excellent service and genuine product!', rating: 5 },
          { name: 'Priya Mehta', text: 'Been buying phones from Vishal Mobile for 5 years. Always trusted and reliable.', rating: 5 },
          { name: 'Amit Kumar', text: 'Quick service, best prices, and they even helped set up my new Samsung. Highly recommend!', rating: 5 }
        ].map((review, i) => (
          <div key={i} style={{
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
      padding: scrolled ? '10px 0' : '16px 0',
      background: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="logo-pulse" style={{
            width: '48px', height: '48px', borderRadius: '14px',
            background: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 25px rgba(212,175,55,0.4)',
            fontSize: '1.5rem'
          }}>📱</div>
          <div>
            <div style={{ fontWeight: '900', fontSize: '1.2rem' }}>Vishal Mobile</div>
            <div style={{ fontSize: '0.7rem', color: '#D4AF37', fontWeight: '600' }}>★ Premium Store</div>
          </div>
        </a>
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {['Home', 'Products', 'Brands', 'Visit Us'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`}
              style={{ fontWeight: '600', fontSize: '0.95rem', transition: 'color 0.3s' }}>{item}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer"
            style={{
              padding: '12px 24px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              fontWeight: '700', fontSize: '0.95rem',
              boxShadow: '0 4px 25px rgba(37,211,102,0.4)'
            }}>💬 WhatsApp</a>
          <a href="https://www.instagram.com/badnera_phonewala" target="_blank" rel="noopener noreferrer"
            style={{
              padding: '12px 24px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #833ab4, #fd1d1d)',
              fontWeight: '700', fontSize: '0.95rem',
              boxShadow: '0 4px 25px rgba(253,29,29,0.4)'
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
    <div className="float-animation" style={{
      position: 'absolute', top: '15%', right: '25%', width: '500px', height: '500px',
      background: 'radial-gradient(circle, rgba(139,92,246,0.2), transparent 60%)',
      filter: 'blur(80px)'
    }} />
    <div style={{
      position: 'absolute', bottom: '15%', left: '15%', width: '400px', height: '400px',
      background: 'radial-gradient(circle, rgba(212,175,55,0.15), transparent 60%)',
      filter: 'blur(80px)'
    }} />

    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <div className="slide-in">
        <span style={{
          display: 'inline-block', padding: '10px 20px',
          background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))',
          border: '1px solid rgba(212,175,55,0.4)',
          borderRadius: '30px', color: '#D4AF37', fontWeight: '700', fontSize: '0.95rem', marginBottom: '28px'
        }}>✨ Trusted by 5000+ Customers</span>

        <h1 style={{ fontSize: '4.2rem', lineHeight: '1.08', marginBottom: '28px', fontWeight: '900' }}>
          Your Premium<br />
          <span className="shimmer-text">Mobile Destination</span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', marginBottom: '36px', maxWidth: '520px', lineHeight: '1.7' }}>
          Experience genuine smartphones at unbeatable prices. Full warranty, expert service, and lifetime support.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '50px' }}>
          <a href="#products" style={{
            padding: '16px 36px', borderRadius: '14px',
            background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
            fontWeight: '800', fontSize: '1.05rem',
            boxShadow: '0 8px 35px rgba(139,92,246,0.45)'
          }}>Browse Collection</a>
          <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer" style={{
            padding: '16px 36px', borderRadius: '14px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.2)',
            fontWeight: '700', fontSize: '1.05rem'
          }}>💬 Get Quote</a>
        </div>

        <div style={{ display: 'flex', gap: '50px' }}>
          {[
            { value: '5000+', label: 'Happy Customers' },
            { value: '50+', label: 'Phone Brands' },
            { value: '8+', label: 'Years Trust' }
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#D4AF37' }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="float-animation" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: '320px', height: '620px',
          background: 'linear-gradient(145deg, #1a1a2e, #0a0a15)',
          borderRadius: '50px', border: '4px solid rgba(255,255,255,0.1)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: '18px', left: '18px', right: '18px', bottom: '18px',
            background: 'linear-gradient(180deg, #1a1a35, #12122a)',
            borderRadius: '38px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '20px' }}>📱</div>
            <div style={{ fontWeight: '900', fontSize: '1.6rem' }}>VISHAL</div>
            <div className="shimmer-text" style={{ fontWeight: '700', fontSize: '1.1rem' }}>MOBILE</div>
            <div style={{ marginTop: '20px', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Premium Store</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{
    background: 'linear-gradient(180deg, #0a0a0a, #030303)',
    padding: '30px 16px',
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.05)'
  }}>
    <div style={{ marginBottom: '16px' }}>
      <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>Vishal Mobile Shopee</span>
      <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 10px' }}>|</span>
      <span style={{ color: 'rgba(255,255,255,0.5)' }}>Badnera, Amravati</span>
    </div>
    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
      © 2026 All Rights Reserved • Made with ❤️
    </p>
  </footer>
);

export default App;
