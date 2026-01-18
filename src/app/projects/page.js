import Link from 'next/link';

export const metadata = {
    title: 'Projects | ReCreat0rz',
    description: 'Showcase of my technical projects and tools.',
};

export default function Projects() {
    const projects = [
        {
            title: "BBHT_Automation",
            description: "Bug Bounty Hunting Tools Automation for Recon by ReCreat0rz. A comprehensive automation suite designed to streamline reconnaissance for bug bounty hunters.",
            github: "https://github.com/ReCreat0rz/BBHT_Automation",
            tags: ["Security", "Automation", "Recon", "Python/Bash"]
        }
    ];

    return (
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
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

            <div style={{ display: 'grid', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        borderLeft: '4px solid var(--primary-color)',
                        borderRadius: '12px',
                        padding: '2rem',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                        position: 'relative',
                        overflow: 'hidden'
                    }} className="project-card">
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'flex-start',
                            marginBottom: '1rem' 
                        }}>
                            <h2 style={{ 
                                margin: 0, 
                                fontSize: '1.8rem', 
                                color: 'var(--primary-color)',
                                border: 'none',
                                padding: 0
                            }}>
                                {project.title}
                            </h2>
                            <Link 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'rgba(0, 243, 255, 0.1)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    fontSize: '0.9rem',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(0, 243, 255, 0.2)',
                                    fontWeight: 'bold'
                                }}
                            >
                                GitHub →
                            </Link>
                        </div>
                        
                        <p style={{ 
                            color: 'var(--text-color)', 
                            lineHeight: '1.8',
                            fontSize: '1.05rem',
                            marginBottom: '1.5rem' 
                        }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} style={{
                                    fontSize: '0.75rem',
                                    padding: '0.2rem 0.6rem',
                                    background: 'rgba(124, 58, 237, 0.1)',
                                    color: 'var(--accent-color)',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(124, 58, 237, 0.2)',
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: 'bold'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .project-card:hover {
                    transform: translateY(-4px);
                    border-color: var(--primary-color);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                }
            `}</style>
        </div>
    );
}
