import React from 'react';

const MobileContact = () => {
    return (
        <div className="container animate-fade-in-up" style={{ padding: '24px 20px 100px 20px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '8px', fontWeight: '800' }}>Get in Touch</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>We'd love to hear from you. Visit us or contact us directly.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="tel:9370763601" className="glass-effect premium-card" style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '20px', borderRadius: '24px', textDecoration: 'none', color: 'inherit'
                }}>
                    <div style={{
                        width: '56px', height: '56px', borderRadius: '18px',
                        background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.5rem', boxShadow: '0 8px 16px rgba(76,175,80,0.3)'
                    }}>📞</div>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '4px' }}>Call Us</div>
                        <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>+91 93707 63601</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Primary Number</div>
                    </div>
                </a>

                <a href="https://wa.me/919370763601" target="_blank" rel="noopener noreferrer"
                    className="glass-effect premium-card" style={{
                        display: 'flex', alignItems: 'center', gap: '16px',
                        padding: '20px', borderRadius: '24px', textDecoration: 'none', color: 'inherit',
                        background: 'linear-gradient(145deg, rgba(37,211,102,0.1), rgba(37,211,102,0.05))',
                        border: '1px solid rgba(37,211,102,0.2)'
                    }}>
                    <div style={{
                        width: '56px', height: '56px', borderRadius: '18px',
                        background: 'linear-gradient(135deg, #25D366, #128C7E)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.5rem', boxShadow: '0 8px 16px rgba(37,211,102,0.3)'
                    }}>💬</div>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '4px' }}>WhatsApp</div>
                        <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}>Chat Support</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fastest Response</div>
                    </div>
                </a>

                <div className="glass-effect" style={{
                    padding: '24px', borderRadius: '24px', marginTop: '16px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <span style={{ fontSize: '1.2rem' }}>📍</span>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Visit Store</h3>
                    </div>

                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
                        **Vishal Mobile Shop**<br />
                        Near Main Market, Badnera<br />
                        Amravati, Maharashtra 444701
                    </p>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '12px', color: 'var(--gold)' }}>🕒 OPENING HOURS</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Mon - Sat</span>
                            <span>10:00 AM - 9:00 PM</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Sunday</span>
                            <span>11:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileContact;
