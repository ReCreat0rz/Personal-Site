'use client';

import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            title: "BBHT_Automation",
            description: "Bug Bounty Hunting Tools Automation for Recon by ReCreat0rz",
            github: "https://github.com/ReCreat0rz/BBHT_Automation",
            tags: ["Bug Bounty", "Automation", "Recon", "Bash"]
        }
    ];

    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 style={{
                marginBottom: '3rem',
                fontSize: '2.5rem',
                letterSpacing: '-0.05em',
                fontFamily: 'var(--font-mono)',
                color: 'var(--primary-color)',
                textShadow: 'var(--glow-text)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '1rem',
                display: 'inline-block'
            }}>
                Projects
            </h1>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header">
                            <h2 className="project-title">
                                {project.title}
                            </h2>
                            <Link 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                GitHub →
                            </Link>
                        </div>
                        
                        <p className="project-description">
                            {project.description}
                        </p>

                        <div className="tags-container">
                            {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .projects-grid {
                    display: grid;
                    gap: 2rem;
                }
                .project-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-left: 4px solid var(--primary-color);
                    border-radius: 12px;
                    padding: 2rem;
                    transition: transform 0.2s ease, border-color 0.2s ease;
                    position: relative;
                    overflow: hidden;
                }
                .project-card:hover {
                    transform: translateY(-4px);
                    border-color: var(--primary-color);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                }
                .project-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    marginBottom: 1rem;
                    gap: 1rem;
                }
                .project-title {
                    margin: 0;
                    font-size: 1.8rem;
                    color: var(--primary-color);
                    border: none;
                    padding: 0;
                }
                .github-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(0, 243, 255, 0.1);
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    font-size: 0.9rem;
                    color: var(--primary-color);
                    border: 1px solid rgba(0, 243, 255, 0.2);
                    font-weight: bold;
                    white-space: nowrap;
                }
                .project-description {
                    color: var(--text-color);
                    line-height: 1.8;
                    font-size: 1.05rem;
                    margin-bottom: 1.5rem;
                }
                .tags-container {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }
                .tag {
                    font-size: 0.75rem;
                    padding: 0.2rem 0.6rem;
                    background: rgba(124, 58, 237, 0.1);
                    color: var(--accent-color);
                    border-radius: 4px;
                    border: 1px solid rgba(124, 58, 237, 0.2);
                    font-family: var(--font-mono);
                    font-weight: bold;
                }

                @media (max-width: 768px) {
                    .project-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .project-title {
                        font-size: 1.5rem;
                    }
                    .github-link {
                        width: 100%;
                        justify-content: center;
                    }
                    .project-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
}
