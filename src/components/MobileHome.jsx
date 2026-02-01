import React from 'react';

const MobileHome = ({ setActiveTab }) => {
    return (
        <div className="animate-fade-in-up" style={{ paddingBottom: '100px' }}>
            {/* Hero Section */}
            <div style={{
                position: 'relative',
                height: '420px',
                width: '100%',
                overflow: 'hidden',
                borderBottomLeftRadius: '32px',
                borderBottomRightRadius: '32px',
                marginBottom: '24px'
            }}>
                {/* Abstract Background */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, #0F172A 0%, #1e1b4b 50%, #312e81 100%)',
                    zIndex: 1
                }} />
                <div style={{
                    position: 'absolute', top: '-10%', right: '-20%',
                    width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)',
                    filter: 'blur(60px)', zIndex: 2
                }} />
                <div style={{
                    position: 'absolute', bottom: '-10%', left: '-10%',
                    width: '300px', height: '300px',
                    background: 'radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)',
                    filter: 'blur(50px)', zIndex: 2
                }} />

                {/* Content */}
                <div className="container" style={{
                    position: 'relative', zIndex: 10, height: '100%',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    padding: '24px'
                }}>
                    <div className="animate-scale-in" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '6px 14px', borderRadius: '20px',
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                        width: 'fit-content', marginBottom: '20px'
                    }}>
                        <span style={{ fontSize: '1rem' }}>🏆</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.9)' }}>
                            #1 STORE IN BADNERA
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: '2.8rem', lineHeight: '1.1', fontWeight: '800',
                        marginBottom: '16px', letterSpacing: '-0.02em'
                    }}>
                        Discover <br />
                        <span className="text-gradient-primary">Premium Tech.</span>
                    </h1>

                    <p style={{
                        fontSize: '1rem', color: 'rgba(255,255,255,0.7)',
                        marginBottom: '28px', maxWidth: '80%', lineHeight: '1.6'
                    }}>
                        Upgrade your lifestyle with the latest smartphones and accessories.
                    </p>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            onClick={() => setActiveTab('products')}
                            className="premium-card"
                            style={{
                                flex: 1, padding: '16px', borderRadius: '16px',
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                border: 'none', color: 'white', fontSize: '1rem', fontWeight: '700',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                boxShadow: '0 8px 20px rgba(99,102,241,0.3)'
                            }}>
                            View Phones 📱
                        </button>
                        <a
                            href="https://wa.me/919370763601"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="premium-card"
                            style={{
                                flex: 1, padding: '16px', borderRadius: '16px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                color: 'white', fontSize: '1rem', fontWeight: '600',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                            }}>
                            WhatsApp 💬
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ padding: '0 20px' }}>
                {/* Quick Stats Widget */}
                <div className="no-scrollbar" style={{
                    display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '32px'
                }}>
                    {[
                        { label: 'Customers', value: '5000+', icon: '👥', color: '#3b82f6' },
                        { label: 'Models', value: '50+', icon: '📱', color: '#8b5cf6' },
                        { label: 'Rating', value: '4.9★', icon: '⭐', color: '#eab308' },
                        { label: 'Support', value: '24/7', icon: '🎧', color: '#10b981' },
                    ].map((stat, i) => (
                        <div key={i} className="glass-effect premium-card" style={{
                            minWidth: '110px', padding: '16px', borderRadius: '20px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
                        }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '12px',
                                background: `${stat.color}20`, color: stat.color,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
                            }}>
                                {stat.icon}
                            </div>
                            <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontWeight: '500' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Categories / Feature Grid */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Shop By Category</h2>
                    <span onClick={() => setActiveTab('products')} style={{ fontSize: '0.85rem', color: '#8b5cf6', fontWeight: '600', cursor: 'pointer' }}>See All</span>
                </div>

                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '32px'
                }}>
                    <div onClick={() => setActiveTab('products')} className="card-gradient premium-card" style={{
                        padding: '20px', borderRadius: '24px', gridColumn: 'span 2',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div style={{ fontSize: '0.8rem', color: '#8b5cf6', fontWeight: '700', marginBottom: '4px' }}>TRENDING</div>
                            <div style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '4px' }}>Smartphones</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Latest 5G Models</div>
                        </div>
                        <div style={{ fontSize: '3.5rem', transform: 'rotate(-10deg) translate(10px, 10px)' }}>📱</div>
                    </div>

                    <div onClick={() => setActiveTab('accessories')} className="card-gradient premium-card" style={{
                        padding: '20px', borderRadius: '24px',
                        display: 'flex', flexDirection: 'column', gap: '12px'
                    }}>
                        <div style={{
                            width: '45px', height: '45px', borderRadius: '14px',
                            background: 'rgba(6,182,212,0.1)', color: '#06b6d4',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
                        }}>🎧</div>
                        <div>
                            <div style={{ fontSize: '1rem', fontWeight: '700' }}>Audio</div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>TWS & Neckbands</div>
                        </div>
                    </div>

                    <div onClick={() => setActiveTab('accessories')} className="card-gradient premium-card" style={{
                        padding: '20px', borderRadius: '24px',
                        display: 'flex', flexDirection: 'column', gap: '12px'
                    }}>
                        <div style={{
                            width: '45px', height: '45px', borderRadius: '14px',
                            background: 'rgba(244,63,94,0.1)', color: '#f43f5e',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
                        }}>⌚</div>
                        <div>
                            <div style={{ fontSize: '1rem', fontWeight: '700' }}>Wearables</div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Watches & Bands</div>
                        </div>
                    </div>
                </div>

                {/* Special Offer Widget */}
                <div className="premium-card" style={{
                    background: 'linear-gradient(135deg, #16a34a, #059669)',
                    borderRadius: '24px', padding: '24px', position: 'relative', overflow: 'hidden',
                    marginBottom: '32px', boxShadow: '0 10px 30px rgba(22,163,74,0.2)'
                }}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{
                            background: 'rgba(0,0,0,0.2)', padding: '4px 12px', borderRadius: '20px',
                            display: 'inline-block', fontSize: '0.75rem', fontWeight: '700', marginBottom: '12px', color: 'white'
                        }}>LIMITED TIME DEAL</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '8px', lineHeight: '1.2' }}>
                            Exchange Offer
                        </h3>
                        <p style={{ fontSize: '0.9rem', marginBottom: '20px', color: 'rgba(255,255,255,0.9)' }}>
                            Get up to ₹5,000 extra on your old phone exchange.
                        </p>
                        <a href="https://wa.me/919370763601?text=Hi,%20I%20want%20to%20know%20about%20exchange%20offers"
                            style={{
                                background: 'white', color: '#059669', padding: '12px 24px', borderRadius: '12px',
                                fontWeight: '700', fontSize: '0.9rem', display: 'inline-block'
                            }}>
                            Check Value →
                        </a>
                    </div>
                    {/* Decorative circles */}
                    <div style={{
                        position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px',
                        background: 'rgba(255,255,255,0.1)', borderRadius: '50%'
                    }} />
                    <div style={{
                        position: 'absolute', bottom: '-40px', right: '40px', width: '100px', height: '100px',
                        background: 'rgba(255,255,255,0.1)', borderRadius: '50%'
                    }} />
                </div>

                {/* Brands Ticker */}
                <h3 style={{ fontSize: '1rem', marginBottom: '16px', fontWeight: '700', color: 'var(--text-muted)' }}>AUTHORIZED DEALERS</h3>
                <div style={{
                    display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '10px'
                }} className="no-scrollbar">
                    {['Apple', 'Samsung', 'OnePlus', 'Vivo', 'Oppo', 'Realme', 'Xiaomi'].map((brand) => (
                        <div key={brand} className="glass-effect" style={{
                            padding: '12px 24px', borderRadius: '100px',
                            fontSize: '0.9rem', fontWeight: '600', whiteSpace: 'nowrap',
                            color: 'rgba(255,255,255,0.8)'
                        }}>
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileHome;
