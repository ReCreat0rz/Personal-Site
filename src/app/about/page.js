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
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                        <Image src="/badges/OSCP.png" alt="OSCP" width={80} height={80} style={{ objectFit: 'contain' }} />
                        <Image src="/badges/OSCP+.png" alt="OSCP+" width={80} height={80} style={{ objectFit: 'contain' }} />
                        <Image src="/badges/image_CPSA.png" alt="CPSA" width={80} height={80} style={{ objectFit: 'contain' }} />
                        <Image src="/badges/image_CRT.png" alt="CRT" width={80} height={80} style={{ objectFit: 'contain' }} />
                    </div>
                    <div style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Cybersecurity Professional with 3+ years of experience and 150+ completed penetration testing assessments across Web, API, Mobile, and Infrastructure, with 40% focusing on mobile application security and 35% focusing on Infrastructure Security. Specialized in delivering penetration testing services for clients across the financial services sector. Produced comprehensive technical security findings and formulated remediation plans for clients, successfully eliminating 70% of identified security findings within financial services sectors.
                        </p>

                        <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', textShadow: 'var(--glow-text)' }}>Education</h3>
                            <div style={{ marginBottom: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem' }}>
                                <h4 style={{ color: 'var(--accent-color)', margin: '0 0 0.5rem 0' }}>Bachelor of Science (BS) in Information Systems Audit</h4>
                                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)' }}>BINUS University | August 2018 – April 2022</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-color)', fontSize: '0.9rem' }}>
                                    <li style={{ marginBottom: '0.3rem' }}>• Graduated with a Cumulative Grade Point Average of 3.47 / 4.00.</li>
                                    <li>• Core Coursework & Academic Focus: Penetration Testing, Information Systems Audit, IT Governance, Information System Investigation, and Risk Management.</li>
                                </ul>
                            </div>
                        </div>

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
                                            Research Interest
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{
                                            padding: '1rem',
                                            verticalAlign: 'top',
                                            color: 'var(--text-color)'
                                        }}>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                <li style={{ marginBottom: '0.3rem' }}>• Vehicle Security</li>
                                                <li>• iOS Security (side-gig)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

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
                                            Certifications
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{
                                            padding: '1rem',
                                            verticalAlign: 'top',
                                            color: 'var(--text-color)'
                                        }}>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                <li style={{ marginBottom: '0.3rem' }}>• CREST Registered Penetration Tester (CRT)</li>
                                                <li style={{ marginBottom: '0.3rem' }}>• CREST Practitioner Security Analyst (CPSA)</li>
                                                <li style={{ marginBottom: '0.3rem' }}>• OffSec Certified Professional+ (OSCP+)</li>
                                                <li>• OffSec Certified Professional (OSCP)</li>
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
