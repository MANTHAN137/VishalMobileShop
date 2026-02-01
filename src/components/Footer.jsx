import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    &copy; {new Date().getFullYear()} Vishal Mobile Shopee. All rights reserved.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="https://www.instagram.com/badnera_phonewala/?hl=en" className="gradient-text" style={{ fontWeight: '600' }}>Instagram</a>
                    <a href="#" style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
                    <a href="#" style={{ color: 'var(--text-muted)' }}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
