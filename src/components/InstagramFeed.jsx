import React from 'react';

const reels = [
    { id: 1, embedUrl: "https://www.instagram.com/reel/DSuHW02D5hU/embed" },
    { id: 2, embedUrl: "https://www.instagram.com/reel/DQJNvgkALT5/embed" },
    { id: 3, embedUrl: "https://www.instagram.com/reel/DPIWm8nAAWu/embed" },
    { id: 4, embedUrl: "https://www.instagram.com/reel/DTFq5_pgppg/embed" },
];

const InstagramFeed = () => {
    return (
        <section style={{ padding: '5rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Watch Our <span className="gradient-text">Reels</span></h2>
                        <p style={{ color: 'var(--text-muted)' }}>Stay updated with our latest offers and new arrivals!</p>
                    </div>
                    <a
                        href="https://www.instagram.com/badnera_phonewala/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        View Profile
                    </a>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    justifyItems: 'center'
                }}>
                    {reels.map(reel => (
                        <div
                            key={reel.id}
                            className="glass-panel"
                            style={{
                                overflow: 'hidden',
                                borderRadius: '1rem',
                                width: '100%',
                                maxWidth: '350px'
                            }}
                        >
                            <iframe
                                src={reel.embedUrl}
                                width="100%"
                                height="500"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                                allow="encrypted-media"
                                title={`Instagram Reel ${reel.id}`}
                                style={{ border: 'none', display: 'block' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
