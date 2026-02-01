import React from 'react';

const Location = () => {
    return (
        <section id="location" className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--bg-dark), #111)' }}>
            <div className="container animate-fade-in-up">
                <div className="location-card glass-effect">

                    <div className="location-info">
                        <div style={{
                            display: 'inline-block', padding: '6px 16px', borderRadius: '20px',
                            background: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.2)',
                            color: '#25D366', fontSize: '0.8rem', fontWeight: '600', marginBottom: '16px'
                        }}>
                            📍 Visit Us Today
                        </div>
                        <h2 className="location-title">Find Our <span className="gradient-text">Store</span></h2>
                        <p className="location-desc">
                            Experience the latest devices in person. Our team is ready to help you find the perfect tech companion.
                        </p>

                        <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '16px' }}>
                            <h4 style={{ color: 'white', marginBottom: '8px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>🏢</span> Vishal Mobile Shopee
                            </h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '12px' }}>
                                Jaistambh Chowk, Mhada Colony<br />
                                Badnera, Amravati<br />
                                Maharashtra 444701
                            </p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <a href="tel:9370763601" style={{ color: 'var(--text-main)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                    📞 9370763601
                                </a>
                                <a href="tel:7499889672" style={{ color: 'var(--text-main)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                    📞 7499889672
                                </a>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir/19.182736,72.8626986/Vishal+Mobile+Shopee,+jaistambh+chowk,+Mhada+Colony,+Badnera,+Amravati,+Maharashtra+444701/@20.0183016,72.6419277,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd6babb0fef53d7:0x21e0fc7b8f0e3b75!2m2!1d77.7300539!2d20.8543312?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ display: 'inline-flex', gap: '8px' }}
                        >
                            <span>🗺️</span> Get Directions
                        </a>
                    </div>

                    <div className="location-map premium-card">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15259.605396582496!2d77.7289528!3d20.8543312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6babb0fef53d7%3A0x21e0fc7b8f0e3b75!2sVishal%20Mobile%20Shopee!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Vishal Mobile Shop Location"
                        ></iframe>
                    </div>

                </div>
            </div>

            <style>{`
                .location-card {
                    padding: 2rem;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    align-items: center;
                    border-radius: 24px;
                }
                
                .location-title {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }
                
                .location-desc {
                    font-size: 1rem;
                    color: var(--text-muted);
                    margin-bottom: 2rem;
                }
                
                .location-map {
                    height: 400px;
                    background: var(--bg-card);
                    border-radius: 24px;
                    overflow: hidden;
                    border: 1px solid var(--glass-border);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }
                
                @media (max-width: 768px) {
                    .location-card {
                        grid-template-columns: 1fr;
                        padding: 1.5rem;
                        gap: 2rem;
                    }
                    
                    .location-title {
                        font-size: 1.8rem;
                    }
                    
                    .location-desc {
                        font-size: 0.95rem;
                        margin-bottom: 1.5rem;
                    }
                    
                    .location-map {
                        height: 250px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Location;
