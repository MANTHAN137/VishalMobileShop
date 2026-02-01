import React from 'react';

const accessories = [
    // Audio Category
    {
        id: 1,
        name: "JBL Flip 6",
        category: "Bluetooth Speaker",
        price: "Starts ₹9,999",
        tag: "🔊 Bass Beast",
        color: "#ff6b00"
    },
    {
        id: 2,
        name: "OnePlus Buds 3",
        category: "Earbuds",
        price: "₹4,999",
        tag: "🎧 Noise Cancellation",
        color: "#f50514"
    },
    {
        id: 3,
        name: "Boat Airdopes",
        category: "Earbuds",
        price: "Starts ₹1,299",
        tag: "🔥 Bestseller",
        color: "#ff0000"
    },
    {
        id: 4,
        name: "Sony WH-1000XM5",
        category: "Headphones",
        price: "Premium Range",
        tag: "🎶 Studio Quality",
        color: "#000000"
    },
    // Mobile Accessories
    {
        id: 5,
        name: "Fast Chargers",
        category: "Power",
        price: "All Brands",
        tag: "⚡ 33W to 120W",
        color: "#25D366"
    },
    {
        id: 6,
        name: "Premium Covers",
        category: "Protection",
        price: "Starts ₹299",
        tag: "🛡️ 360° Protection",
        color: "#8B5CF6"
    },
    // Smart TV & Living
    {
        id: 7,
        name: "Smart TVs",
        category: "Entertainment",
        price: "Samsung, Mi, LG",
        tag: "📺 32\" to 65\"",
        color: "#06B6D4"
    },
    {
        id: 8,
        name: "Smart Watches",
        category: "Wearables",
        price: "Boat, Noise, Apple",
        tag: "⌚ Fitness Tracking",
        color: "#D4AF37"
    }
];

const Accessories = () => {
    return (
        <section id="accessories" className="section-padding" style={{ background: 'linear-gradient(180deg, #050505, #0a0a0a)' }}>
            <div className="container animate-fade-in-up">
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <span style={{
                        color: 'var(--primary)',
                        background: 'rgba(139,92,246,0.1)',
                        padding: '6px 16px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        border: '1px solid rgba(139,92,246,0.2)'
                    }}>
                        Complete Your Ecosystem
                    </span>
                    <h2 style={{ fontSize: '2.2rem', margin: '1rem 0 0.5rem 0' }}>
                        Accessories & <span className="gradient-text">More</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                        Premium sound, protection, and smart entertainment.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                    {accessories.map((item, index) => (
                        <div key={item.id} className="glass-effect premium-card animate-scale-in"
                            style={{
                                padding: '1.25rem',
                                borderRadius: '20px',
                                cursor: 'default',
                                animationDelay: `${index * 0.05}s`,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                            <div style={{
                                width: '50px', height: '50px', borderRadius: '14px',
                                background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`,
                                border: `1px solid ${item.color}33`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1rem',
                                fontSize: '1.5rem',
                                color: item.color
                            }}>
                                {index < 4 ? '🎧' : (index < 6 ? '⚡' : (index < 7 ? '📺' : '⌚'))}
                            </div>

                            <div style={{ marginBottom: 'auto' }}>
                                <span style={{
                                    fontSize: '0.65rem',
                                    padding: '4px 8px',
                                    borderRadius: '6px',
                                    background: `rgba(255,255,255,0.05)`,
                                    color: 'rgba(255,255,255,0.7)',
                                    fontWeight: '600',
                                    display: 'inline-block',
                                    marginBottom: '8px'
                                }}>
                                    {item.category}
                                </span>
                                <h3 style={{ fontSize: '1rem', marginBottom: '4px', fontWeight: '700' }}>{item.name}</h3>
                                <div style={{ fontSize: '0.7rem', color: item.color, fontWeight: '600' }}>{item.tag}</div>
                            </div>

                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{item.price}</div>
                                <a href={`https://wa.me/919370763601?text=Hi, I want to know about ${item.name}`}
                                    target="_blank" rel="noopener noreferrer"
                                    style={{
                                        display: 'block', width: '100%', padding: '8px',
                                        background: 'rgba(255,255,255,0.05)', borderRadius: '10px',
                                        textAlign: 'center', fontSize: '0.8rem', fontWeight: '600',
                                        color: 'white', textDecoration: 'none'
                                    }}>
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accessories;
