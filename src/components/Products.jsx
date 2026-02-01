import React, { useState } from 'react';

const products = [
    // BUDGET RANGE (₹10K - ₹25K)
    {
        id: 1,
        name: "Redmi Note 13 Pro",
        price: "₹18,999",
        brand: "Xiaomi",
        tag: "💰 Best Seller",
        category: "budget",
        image: "https://placehold.co/600x400/1e1e1e/ff6b00?text=Redmi+Note+13+Pro"
    },
    {
        id: 2,
        name: "Realme Narzo 70 Pro",
        price: "₹19,999",
        brand: "Realme",
        tag: "📸 Camera King",
        category: "budget",
        image: "https://placehold.co/600x400/1e1e1e/ffcc00?text=Narzo+70+Pro"
    },
    {
        id: 3,
        name: "Poco M7 Pro",
        price: "₹14,999",
        brand: "Poco",
        tag: "🔥 Budget Hero",
        category: "budget",
        image: "https://placehold.co/600x400/1e1e1e/ffc107?text=Poco+M7+Pro"
    },
    {
        id: 4,
        name: "Samsung Galaxy A35",
        price: "₹24,999",
        brand: "Samsung",
        tag: "⭐ Reliable",
        category: "budget",
        image: "https://placehold.co/600x400/1e1e1e/1428a0?text=Galaxy+A35"
    },
    // MID RANGE (₹25K - ₹45K)
    {
        id: 5,
        name: "OnePlus Nord 4",
        price: "₹29,999",
        brand: "OnePlus",
        tag: "⚡ Fast & Smooth",
        category: "mid",
        image: "https://placehold.co/600x400/1e1e1e/f50514?text=Nord+4"
    },
    {
        id: 6,
        name: "Vivo V40",
        price: "₹34,999",
        brand: "Vivo",
        tag: "📷 Portrait Pro",
        category: "mid",
        image: "https://placehold.co/600x400/1e1e1e/4169e1?text=Vivo+V40"
    },
    {
        id: 7,
        name: "Poco F7 Pro",
        price: "₹34,999",
        brand: "Poco",
        tag: "🎮 Gaming Beast",
        category: "mid",
        image: "https://placehold.co/600x400/1e1e1e/ffc107?text=Poco+F7+Pro"
    },
    {
        id: 8,
        name: "Samsung Galaxy A56",
        price: "₹37,999",
        brand: "Samsung",
        tag: "🛡️ Premium Build",
        category: "mid",
        image: "https://placehold.co/600x400/1e1e1e/1428a0?text=Galaxy+A56"
    },
    {
        id: 9,
        name: "iQOO Neo 10 Pro",
        price: "₹38,999",
        brand: "iQOO",
        tag: "🏆 Value King",
        category: "mid",
        image: "https://placehold.co/600x400/1e1e1e/ff6600?text=iQOO+Neo+10+Pro"
    },
    {
        id: 10,
        name: "OnePlus 13R",
        price: "₹42,999",
        brand: "OnePlus",
        tag: "💯 Popular Pick",
        category: "mid",
        image: "https://placehold.co/600x400/1e1e1e/f50514?text=OnePlus+13R"
    },
    // HIGH RANGE (₹45K - ₹90K)
    {
        id: 11,
        name: "iQOO 13",
        price: "₹54,999",
        brand: "iQOO",
        tag: "⚡ Flagship Killer",
        category: "flagship",
        image: "https://placehold.co/600x400/1e1e1e/ff6600?text=iQOO+13"
    },
    {
        id: 12,
        name: "Nothing Phone (3)",
        price: "₹54,999",
        brand: "Nothing",
        tag: "💡 Unique Style",
        category: "flagship",
        image: "https://placehold.co/600x400/1e1e1e/ffffff?text=Nothing+Phone+3"
    },
    {
        id: 13,
        name: "Realme GT 7 Pro",
        price: "₹59,999",
        brand: "Realme",
        tag: "🚀 Power Packed",
        category: "flagship",
        image: "https://placehold.co/600x400/1e1e1e/ffcc00?text=GT+7+Pro"
    },
    {
        id: 14,
        name: "Vivo X200",
        price: "₹65,999",
        brand: "Vivo",
        tag: "📸 Camera Pro",
        category: "flagship",
        image: "https://placehold.co/600x400/1e1e1e/4169e1?text=Vivo+X200"
    },
    {
        id: 15,
        name: "OnePlus 13",
        price: "₹69,999",
        brand: "OnePlus",
        tag: "🔥 Flagship",
        category: "flagship",
        image: "https://placehold.co/600x400/1e1e1e/f50514?text=OnePlus+13"
    },
    {
        id: 16,
        name: "Samsung S25",
        price: "₹80,999",
        brand: "Samsung",
        tag: "🆕 Latest Launch",
        category: "flagship",
        image: "https://placehold.co/600x400/1e1e1e/1428a0?text=Galaxy+S25"
    }
];

const categories = [
    { id: 'all', label: 'All' },
    { id: 'budget', label: 'Budget Friendly' },
    { id: 'mid', label: 'Mid Range' },
    { id: 'flagship', label: 'Flagship' }
];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="products" style={{ padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Trending <span className="gradient-text">Hits</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>The most popular smartphones everyone is talking about!</p>
                </div>

                {/* Categories Tab */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '25px',
                                border: '1px solid',
                                borderColor: activeCategory === cat.id ? 'transparent' : 'rgba(255,255,255,0.2)',
                                background: activeCategory === cat.id ? 'var(--primary)' : 'transparent',
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '0.9rem',
                                fontWeight: '600'
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {filteredProducts.map(product => (
                        <div key={product.id} className="glass-panel" style={{ overflow: 'hidden', padding: '1rem', transition: 'transform 0.3s' }}>
                            <div style={{
                                borderRadius: '0.5rem',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                                aspectRatio: '1.5',
                                position: 'relative'
                            }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.85)', padding: '5px 10px', borderRadius: '6px', fontSize: '0.75rem', color: '#fff', fontWeight: '600' }}>
                                    {product.tag}
                                </div>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.brand}</span>
                                <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{product.name}</h3>
                                <p style={{ color: 'var(--gold)', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '700' }}>{product.price}</p>
                                <a href={`https://wa.me/919370763601?text=Hi, I am interested in ${product.name}`} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }} className="btn btn-outline">Enquire Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
