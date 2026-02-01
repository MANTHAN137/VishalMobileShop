import React from 'react';

const reels = [
    { id: 1, embedUrl: "https://www.instagram.com/reel/DSuHW02D5hU/embed" },
    { id: 2, embedUrl: "https://www.instagram.com/reel/DQJNvgkALT5/embed" },
    { id: 3, embedUrl: "https://www.instagram.com/reel/DPIWm8nAAWu/embed" },
    { id: 4, embedUrl: "https://www.instagram.com/reel/DTFq5_pgppg/embed" },
];

const InstagramFeed = () => {
    return (
        <section style={{ padding: '3rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <div className="reels-header">
                    <div>
                        <h2 className="reels-title">Watch Our <span className="gradient-text">Reels</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Stay updated with our latest offers!</p>
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

                <div className="reels-grid">
                    {reels.map(reel => (
                        <div
                            key={reel.id}
                            className="reel-card glass-panel"
                        >
                            <iframe
                                src={reel.embedUrl}
                                width="100%"
                                height="400"
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

            <style>{`
                .reels-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: end;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .reels-title {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                }
                
                .reels-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                }
                
                .reel-card {
                    overflow: hidden;
                    border-radius: 0.75rem;
                    width: 100%;
                }
                
                @media (max-width: 1200px) {
                    .reels-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media (max-width: 768px) {
                    .reels-title {
                        font-size: 1.5rem;
                    }
                    
                    .reels-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                    
                    .reel-card iframe {
                        height: 350px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .reel-card iframe {
                        height: 300px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default InstagramFeed;
