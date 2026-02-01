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
        <section id="products" className="section-padding" style={{ position: 'relative' }}>
            {/* Background glow for premium feel */}
            <div style={{
                position: 'absolute', top: '20%', left: '-10%', width: '300px', height: '300px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)',
                filter: 'blur(60px)', zIndex: -1
            }} />

            <div className="container animate-fade-in-up">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Trending <span className="gradient-text">Hits</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>The most popular smartphones everyone is talking about!</p>
                </div>

                {/* Categories Tab */}
                <div className="no-scrollbar" style={{
                    display: 'flex',
                    justifyContent: 'center', // Centered on desktop, but for mobile we might want scrolling if many items
                    gap: '12px',
                    marginBottom: '2.5rem',
                    flexWrap: 'wrap'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '100px',
                                border: activeCategory === cat.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                background: activeCategory === cat.id ? 'linear-gradient(90deg, #8B5CF6, #06B6D4)' : 'rgba(255,255,255,0.03)',
                                color: activeCategory === cat.id ? 'white' : 'rgba(255,255,255,0.7)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                boxShadow: activeCategory === cat.id ? '0 4px 15px rgba(139,92,246,0.3)' : 'none',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    justifyContent: 'center'
                }}>
                    {filteredProducts.map((product, index) => (
                        <div key={product.id} className="glass-effect premium-card animate-scale-in"
                            style={{
                                overflow: 'hidden', padding: '16px', borderRadius: '24px',
                                animationDelay: `${index * 0.05}s` // Staggered animation
                            }}>
                            <div style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                marginBottom: '1.2rem',
                                aspectRatio: '4/3',
                                position: 'relative'
                            }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute', top: '12px', right: '12px',
                                    background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)',
                                    padding: '6px 12px', borderRadius: '30px',
                                    fontSize: '0.7rem', color: '#fff', fontWeight: '700',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {product.tag}
                                </div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.brand}</span>
                                    <div style={{ fontSize: '0.8rem', color: '#FBC02D' }}>★★★★★</div>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: '700' }}>{product.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                                    <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '700' }}>{product.price}</span>
                                    <a href={`https://wa.me/919370763601?text=Hi, I am interested in ${product.name}`} target="_blank" rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{
                                            padding: '8px 20px', fontSize: '0.85rem', borderRadius: '12px', textDecoration: 'none',
                                            display: 'inline-block'
                                        }}>
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
