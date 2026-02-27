import Image from 'next/image';

export const metadata = {
    title: 'About | ReCreat0rz',
};

export default function About() {
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
                About Me
            </h1>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <div style={{ flex: '0 0 320px', maxWidth: '100%' }}>
                    <Image
                        src="/mornye-about.jpg"
                        alt="Mornye"
                        width={400}
                        height={566}
                        style={{
                            borderRadius: '12px',
                            objectFit: 'cover',
                            width: '100%',
                            height: 'auto',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 0 20px rgba(192, 132, 252, 0.2)' // Soft purple cyber glow
                        }}
                        quality={100}
                        priority
                    />
                </div>
                <div style={{ flex: '1', minWidth: '300px', fontFamily: 'var(--font-mono)' }}>
                    <h2 style={{
                        color: 'var(--accent-color)',
                        marginTop: 0,
                        fontSize: '1.8rem',
                        marginBottom: '1.5rem'
                    }}>
                        rei
                    </h2>
                    <div style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Yo, welcome to my blog!
                            <br />
                            I’m currently deep in the rabbit hole of <strong style={{ color: 'var(--accent-color)' }}>Reverse Engineering</strong> with iOS being the primary "main-story" content of this blog. I’ve found that the "Strategic Pivot" is the best meta for research—if one topic starts feeling like a soft-lock, I just switch to another to mitigate frustration and keep my mental stack from overflowing while I descend into a recursive spiral of total mental instability chasing the next vuln.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            Most of my learning is an unintentional deep-dive: I'll download an app for "quick recon," start reversing it like a absolute madman, and suddenly I'm trapped in a 3 weeks or 1~12 months research loop trying to figure out why the binary behaves like a sentient puzzle box—complete with troubleshooting and debugging sessions I definitely never requested <span style={{ color: 'var(--primary-color)' }}>- THE TRUE FINAL BOSS!!!</span>
                            <br /><br />
                        </p>
                        
                        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Lore Dump About Me:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            {[
                                "Plays FPS, RPG, MMORPG, and turn-based games because committing to one genre is too mainstream",
                                "Watches anime and reads manga for emotional support",
                                "ERROR: 0xSLEEP_DEP_FOUND — Attempting to reboot consciousness... Sleep is Powerful (but the dakimakura is a boss fight I’ve been kiting for eight hours straight) 💤🔥",
                                "CRITICAL ALERT: Mornye's CUTE and BEAUTIFUL parameters have exceeded safety limits! 🚨 Unhackable levels of peak aesthetic detected... (˶˃ ᵕ ˂˶) .ᐟ.ᐟ"
                            ].map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'separate',
                                borderSpacing: '0',
                                border: '1px solid var(--border-color)',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.9rem'
                            }}>
                                <thead>
                                    <tr style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                                        <th style={{
                                            padding: '1rem',
                                            textAlign: 'left',
                                            borderBottom: '1px solid var(--border-color)',
                                            color: 'var(--primary-color)',
                                            textShadow: 'var(--glow-text)'
                                        }}>
                                            Area of Focus / Research
                                        </th>
                                        <th style={{
                                            padding: '1rem',
                                            textAlign: 'left',
                                            borderBottom: '1px solid var(--border-color)',
                                            color: 'var(--primary-color)',
                                            textShadow: 'var(--glow-text)'
                                        }}>
                                            Interesting Research
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{
                                            padding: '1rem',
                                            borderRight: '1px solid var(--border-color)',
                                            verticalAlign: 'top',
                                            color: 'var(--text-color)'
                                        }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                <div>
                                                    <p style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-color)', fontWeight: 'bold' }}>Main Quest:</p>
                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                        <li>• iOS Reverse Engineering</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Optional Quest:</p>
                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                        <li>• Smart Contract Audit</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{
                                            padding: '1rem',
                                            verticalAlign: 'top',
                                            color: 'var(--text-color)'
                                        }}>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                <li>• ICS/OT Cybersecurity</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
