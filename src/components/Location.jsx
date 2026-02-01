import React from 'react';

const Location = () => {
    return (
        <section id="location" style={{ padding: '3rem 0', background: 'linear-gradient(to bottom, var(--bg-dark), #111)' }}>
            <div className="container">
                <div className="location-card glass-panel">

                    <div className="location-info">
                        <h2 className="location-title">Visit Our <span className="gradient-text">Store</span></h2>
                        <p className="location-desc">
                            Experience the devices in person. Our team is ready to help you find the perfect tech companion.
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>Address & Contact</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Vishal Mobile Shopee<br />
                                Jaistambh Chowk, Mhada Colony<br />
                                Badnera, Amravati<br />
                                Maharashtra 444701
                            </p>
                            <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '0.95rem' }}>
                                📞 9370763601<br />
                                📞 7499889672
                            </p>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir/19.182736,72.8626986/Vishal+Mobile+Shopee,+jaistambh+chowk,+Mhada+Colony,+Badnera,+Amravati,+Maharashtra+444701/@20.0183016,72.6419277,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd6babb0fef53d7:0x21e0fc7b8f0e3b75!2m2!1d77.7300539!2d20.8543312?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ display: 'inline-block' }}
                        >
                            📍 Get Directions
                        </a>
                    </div>

                    <div className="location-map">
                        <div style={{ width: '100%', height: '100%', background: '#1a1a1a', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                <div style={{ width: '20px', height: '20px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 20px var(--accent)', margin: '0 auto' }}></div>
                                <div style={{ marginTop: '10px', background: 'rgba(0,0,0,0.8)', padding: '8px 16px', borderRadius: '8px', whiteSpace: 'nowrap', fontSize: '0.9rem' }}>📍 We are Here!</div>
                            </div>
                            {/* Roads */}
                            <div style={{ position: 'absolute', top: '0', left: '45%', width: '10%', height: '100%', background: '#2a2a2a' }}></div>
                            <div style={{ position: 'absolute', top: '40%', left: '0', width: '100%', height: '15%', background: '#2a2a2a' }}></div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                .location-card {
                    padding: 2rem;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    align-items: center;
                }
                
                .location-title {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
                
                .location-desc {
                    font-size: 1rem;
                    color: var(--text-muted);
                    margin-bottom: 1.5rem;
                }
                
                .location-map {
                    height: 300px;
                    background: var(--bg-card);
                    border-radius: 1rem;
                    overflow: hidden;
                    border: 1px solid var(--glass-border);
                }
                
                @media (max-width: 768px) {
                    .location-card {
                        grid-template-columns: 1fr;
                        padding: 1.5rem;
                        gap: 1.5rem;
                    }
                    
                    .location-title {
                        font-size: 1.5rem;
                    }
                    
                    .location-desc {
                        font-size: 0.95rem;
                    }
                    
                    .location-map {
                        height: 200px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Location;
