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
        <section id="accessories" style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #050505, #0a0a0a)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        color: 'var(--primary)',
                        background: 'rgba(139,92,246,0.1)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                    }}>
                        Complete Your Ecosystem
                    </span>
                    <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>
                        Accessories & <span className="gradient-text">More</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                        Premium sound, protection, and smart entertainment for your home.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                    {accessories.map(item => (
                        <div key={item.id} style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '-20px', right: '-20px',
                                width: '80px', height: '80px',
                                background: `radial-gradient(circle, ${item.color}44, transparent)`,
                                borderRadius: '50%', filter: 'blur(20px)'
                            }} />

                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{
                                    fontSize: '0.7rem',
                                    padding: '4px 8px',
                                    borderRadius: '6px',
                                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`,
                                    border: `1px solid ${item.color}33`,
                                    color: item.color,
                                    fontWeight: '700'
                                }}>
                                    {item.tag}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.name}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                {item.category}
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                <span style={{ fontWeight: '700', color: '#D4AF37' }}>{item.price}</span>
                                <a href={`https://wa.me/919370763601?text=Hi, I want to know about ${item.name}`}
                                    target="_blank" rel="noopener noreferrer"
                                    style={{
                                        width: '32px', height: '32px', borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', transition: 'background 0.3s'
                                    }}>
                                    ➜
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
