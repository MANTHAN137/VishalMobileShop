import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            background: 'url("https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat'
        }}>
            {/* Dark Overlay for readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to right, rgba(10,10,10,0.95), rgba(10,10,10,0.7))',
                zIndex: 0
            }} />
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, var(--gold-glow) 0%, rgba(10,10,10,0) 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(10,10,10,0) 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'rgba(139,92,246,0.1)',
                        border: '1px solid rgba(139,92,246,0.2)',
                        borderRadius: '99px',
                        color: 'var(--primary)',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem'
                    }}>
                        #1 Mobile Shop in Badnera
                    </span>
                    <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        Upgrade Your <br />
                        <span className="gradient-text">Digital Lifestyle</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
                        Discover the latest smartphones and premium accessories at Vishal Mobile Shopee.
                        Experience technology like never before.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#products" className="btn btn-primary">Browse Collection</a>
                        <a href="#location" className="btn btn-outline">Visit Store</a>
                    </div>
                </div>

                <div className="animate-float" style={{ position: 'relative' }}>
                    {/* Abstract Phone Representation */}
                    <div style={{
                        width: '320px',
                        height: '640px',
                        background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
                        borderRadius: '40px',
                        border: '2px solid var(--glass-border)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Screen */}
                        <div style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            right: '12px',
                            bottom: '12px',
                            background: 'linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(139,92,246,0.1) 100%)',
                            borderRadius: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid var(--glass-border)'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'url("https://placehold.co/300x600/101010/8B5CF6?text=VISHAL+MOBILE") center/cover no-repeat',
                                opacity: 0.8,
                                borderRadius: '30px'
                            }} />

                            {/* Reflection */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 40%)',
                                pointerEvents: 'none'
                            }} />
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '20%',
                        right: '-10%',
                        background: 'var(--bg-card)',
                        padding: '1rem',
                        borderRadius: '1rem',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        animation: 'float 5s ease-in-out infinite reverse'
                    }}>
                        <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Latest Models</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>iPhone • Samsung • Oneplus</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
