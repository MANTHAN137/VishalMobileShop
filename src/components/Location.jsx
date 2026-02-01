import React from 'react';

const Location = () => {
    return (
        <section id="location" style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, var(--bg-dark), #111)' }}>
            <div className="container">
                <div className="glass-panel" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Visit Our <span className="gradient-text">Store</span></h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Experience the devices in person. Our team is ready to help you find the perfect tech companion.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Address & Contact</h4>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Vishal Mobile Shopee<br />
                                Jaistambh Chowk, Mhada Colony<br />
                                Badnera, Amravati<br />
                                Maharashtra 444701
                            </p>
                            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                                📞 9370763601<br />
                                📞 7499889672
                            </p>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir/19.182736,72.8626986/Vishal+Mobile+Shopee,+jaistambh+chowk,+Mhada+Colony,+Badnera,+Amravati,+Maharashtra+444701/@20.0183016,72.6419277,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd6babb0fef53d7:0x21e0fc7b8f0e3b75!2m2!1d77.7300539!2d20.8543312?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Get Directions on Maps
                        </a>
                    </div>

                    <div style={{
                        height: '400px',
                        background: 'var(--bg-card)',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        border: '1px solid var(--glass-border)',
                        position: 'relative'
                    }}>
                        {/* Map Placeholder Graphic since we can't embed the real map easily without an API key or generic iframe which might be flaky. CSS Art Map */}
                        <div style={{ width: '100%', height: '100%', background: '#222', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <div style={{ width: '20px', height: '20px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 20px var(--accent)' }}></div>
                                <div style={{ textAlign: 'center', marginTop: '10px', background: 'rgba(0,0,0,0.8)', padding: '5px 10px', borderRadius: '4px', whiteSpace: 'nowrap' }}>We are Here!</div>
                            </div>
                            {/* Roads */}
                            <div style={{ position: 'absolute', top: '0', left: '45%', width: '10%', height: '100%', background: '#333' }}></div>
                            <div style={{ position: 'absolute', top: '40%', left: '0', width: '100%', height: '15%', background: '#333' }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Location;
