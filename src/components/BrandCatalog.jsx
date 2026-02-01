import React, { useState } from 'react';

// Phones launched in the last 8 months (June 2025 - Feb 2026) with approximate prices
const brandData = {
    Apple: {
        color: '#d4af37',
        phones: [
            { name: "iPhone 16 Pro Max", price: "₹1,44,900", spec: "A18 Pro | 256GB" },
            { name: "iPhone 16 Pro", price: "₹1,19,900", spec: "A18 Pro | 128GB" },
            { name: "iPhone 16 Plus", price: "₹89,900", spec: "A18 | 128GB" },
            { name: "iPhone 16", price: "₹79,900", spec: "A18 | 128GB" },
            { name: "iPhone SE 4", price: "₹49,900", spec: "A18 | 128GB" },
        ]
    },
    Samsung: {
        color: '#1428a0',
        phones: [
            { name: "Galaxy S25 Ultra", price: "₹1,34,999", spec: "Snapdragon 8 Elite | 256GB" },
            { name: "Galaxy S25+", price: "₹99,999", spec: "Snapdragon 8 Elite | 256GB" },
            { name: "Galaxy S25", price: "₹80,999", spec: "Snapdragon 8 Elite | 128GB" },
            { name: "Galaxy Z Fold 6", price: "₹1,64,999", spec: "Foldable | 256GB" },
            { name: "Galaxy Z Flip 6", price: "₹1,09,999", spec: "Flip | 256GB" },
            { name: "Galaxy A56", price: "₹37,999", spec: "Exynos 1580 | 128GB" },
        ]
    },
    OnePlus: {
        color: '#f50514',
        phones: [
            { name: "OnePlus 13", price: "₹69,999", spec: "Snapdragon 8 Elite | 256GB" },
            { name: "OnePlus 13R", price: "₹42,999", spec: "Snapdragon 8 Gen 3 | 128GB" },
            { name: "OnePlus Open 2", price: "₹1,49,999", spec: "Foldable | 512GB" },
            { name: "OnePlus Nord 4", price: "₹29,999", spec: "Snapdragon 7+ Gen 3 | 128GB" },
            { name: "OnePlus Nord CE4 Lite", price: "₹19,999", spec: "Snapdragon 695 | 128GB" },
        ]
    },
    Vivo: {
        color: '#4169e1',
        phones: [
            { name: "Vivo X200 Pro", price: "₹94,999", spec: "Dimensity 9400 | 256GB" },
            { name: "Vivo X200", price: "₹65,999", spec: "Dimensity 9400 | 256GB" },
            { name: "Vivo V40 Pro", price: "₹49,999", spec: "Dimensity 9200+ | 256GB" },
            { name: "Vivo V40", price: "₹34,999", spec: "Snapdragon 7 Gen 3 | 128GB" },
            { name: "Vivo T3 Ultra", price: "₹32,999", spec: "Dimensity 9200+ | 128GB" },
        ]
    },
    Oppo: {
        color: '#008000',
        phones: [
            { name: "Oppo Find X8 Pro", price: "₹99,999", spec: "Dimensity 9400 | 256GB" },
            { name: "Oppo Find X8", price: "₹69,999", spec: "Dimensity 9400 | 256GB" },
            { name: "Oppo Reno 12 Pro", price: "₹36,999", spec: "Dimensity 7300 | 256GB" },
            { name: "Oppo Reno 12", price: "₹32,999", spec: "Dimensity 7300 | 128GB" },
            { name: "Oppo F27 Pro+", price: "₹27,999", spec: "Dimensity 7050 | 128GB" },
        ]
    },
    Realme: {
        color: '#ffcc00',
        phones: [
            { name: "Realme GT 7 Pro", price: "₹59,999", spec: "Snapdragon 8 Elite | 256GB" },
            { name: "Realme GT 6", price: "₹40,999", spec: "Snapdragon 8s Gen 3 | 256GB" },
            { name: "Realme 13 Pro+", price: "₹32,999", spec: "Snapdragon 7s Gen 2 | 256GB" },
            { name: "Realme 13 Pro", price: "₹26,999", spec: "Snapdragon 7s Gen 2 | 128GB" },
            { name: "Realme Narzo 70 Pro", price: "₹19,999", spec: "Dimensity 7050 | 128GB" },
        ]
    },
    iQOO: {
        color: '#ff6600',
        phones: [
            { name: "iQOO 13", price: "₹54,999", spec: "Snapdragon 8 Elite | 256GB" },
            { name: "iQOO Neo 10 Pro", price: "₹38,999", spec: "Dimensity 9300+ | 256GB" },
            { name: "iQOO Neo 10", price: "₹29,999", spec: "Snapdragon 8 Gen 3 | 128GB" },
            { name: "iQOO Z9s Pro", price: "₹24,999", spec: "Snapdragon 7 Gen 3 | 128GB" },
            { name: "iQOO Z9s", price: "₹19,999", spec: "Dimensity 7300 | 128GB" },
        ]
    },
    Motorola: {
        color: '#5c5c5c',
        phones: [
            { name: "Motorola Razr 50 Ultra", price: "₹99,999", spec: "Flip | Snapdragon 8s Gen 3" },
            { name: "Motorola Razr 50", price: "₹64,999", spec: "Flip | Dimensity 7300X" },
            { name: "Motorola Edge 50 Ultra", price: "₹59,999", spec: "Snapdragon 8s Gen 3 | 256GB" },
            { name: "Motorola Edge 50 Pro", price: "₹35,999", spec: "Snapdragon 7 Gen 3 | 256GB" },
            { name: "Motorola Edge 50 Fusion", price: "₹22,999", spec: "Snapdragon 7s Gen 2 | 128GB" },
        ]
    },
    Nothing: {
        color: '#ffffff',
        phones: [
            { name: "Nothing Phone (3)", price: "₹54,999", spec: "Snapdragon 8s Gen 3 | 256GB" },
            { name: "Nothing Phone (2a) Plus", price: "₹29,999", spec: "Dimensity 7350 | 256GB" },
            { name: "Nothing Phone (2a)", price: "₹23,999", spec: "Dimensity 7200 | 128GB" },
        ]
    },
    Poco: {
        color: '#ffc107',
        phones: [
            { name: "Poco F7 Pro", price: "₹34,999", spec: "Snapdragon 8 Gen 3 | 256GB" },
            { name: "Poco F7", price: "₹27,999", spec: "Snapdragon 8s Gen 3 | 256GB" },
            { name: "Poco X7 Pro", price: "₹24,999", spec: "Dimensity 8400 | 256GB" },
            { name: "Poco X7", price: "₹21,999", spec: "Dimensity 7300 | 128GB" },
            { name: "Poco M7 Pro", price: "₹14,999", spec: "Dimensity 7025 | 128GB" },
        ]
    }
};

const brands = Object.keys(brandData);

const BrandCatalog = () => {
    const [activeBrand, setActiveBrand] = useState('Apple');

    return (
        <section id="catalog" className="section-padding" style={{ background: 'linear-gradient(180deg, var(--bg-dark) 0%, #0d0d0d 100%)' }}>
            <div className="container animate-fade-in-up">
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Shop by <span className="gradient-text">Brand</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Latest launches with current market prices</p>
                </div>

                {/* Brand Tabs */}
                <div className="no-scrollbar" style={{
                    display: 'flex',
                    flexWrap: 'wrap', // Or 'nowrap' for horizontal scroll if desired, but wrapping is good for quick visual scan
                    gap: '10px',
                    justifyContent: 'center',
                    marginBottom: '2.5rem'
                }}>
                    {brands.map(brand => (
                        <button
                            key={brand}
                            onClick={() => setActiveBrand(brand)}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '99px',
                                border: activeBrand === brand ? `1px solid ${brandData[brand].color}` : '1px solid var(--glass-border)',
                                background: activeBrand === brand ? `linear-gradient(135deg, ${brandData[brand].color}33, ${brandData[brand].color}11)` : 'rgba(255,255,255,0.03)',
                                color: activeBrand === brand ? 'white' : 'var(--text-muted)',
                                cursor: 'pointer',
                                fontWeight: '700',
                                fontSize: '0.85rem',
                                transition: 'all 0.3s ease',
                                boxShadow: activeBrand === brand ? `0 4px 12px ${brandData[brand].color}40` : 'none'
                            }}
                        >
                            {brand}
                        </button>
                    ))}
                </div>

                {/* Phone List for Active Brand */}
                <div className="glass-effect premium-card animate-scale-in" style={{ padding: '1.5rem', borderColor: brandData[activeBrand].color, borderWidth: '1px' }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                        color: brandData[activeBrand].color,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        borderBottom: `1px solid ${brandData[activeBrand].color}30`,
                        paddingBottom: '0.75rem'
                    }}>
                        {activeBrand}
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '400' }}>
                            ({brandData[activeBrand].phones.length})
                        </span>
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {brandData[activeBrand].phones.map((phone, index) => (
                            <div
                                key={index}
                                className="premium-card"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div>
                                    <p style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '0.25rem', color: '#fff' }}>{phone.name}</p>
                                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{phone.spec}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontWeight: '700', fontSize: '1rem', color: brandData[activeBrand].color, marginBottom: '4px' }}>{phone.price}</p>
                                    <a
                                        href={`https://wa.me/919370763601?text=Hi, I want to enquire about ${phone.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: '0.75rem', color: '#25D366', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                    >
                                        Buy Now →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandCatalog;
