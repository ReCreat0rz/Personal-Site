'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import { useEffect, useState } from 'react';

const stats = [
    { name: '🛡️ Penetration Testing', score: 85 },
    { name: '📱 iOS Security', score: 40 },
    { name: '⚙️ Reverse Engineering', score: 40 },
    { name: '🚗 Vehicle Security', score: 5 },
];

const certifications = [
    { name: 'CRT', fullName: 'CREST Registered Penetration Tester', year: '2026–2029', img: '/badges/image_CRT.png', alt: 'CRT' },
    { name: 'CPSA', fullName: 'CREST Practitioner Security Analyst', year: '2026–2029', img: '/badges/image_CPSA.png', alt: 'CPSA' },
    { name: 'OSCP+', fullName: 'OffSec Certified Professional+', year: '2025–2028', img: '/badges/OSCP+.png', alt: 'OSCP+' },
    { name: 'OSCP', fullName: 'OffSec Certified Professional', year: '2025', img: '/badges/OSCP.png', alt: 'OSCP' },
];

const skillCategories = [
    {
        label: 'Core Competencies',
        skills: ['Penetration Testing (Web, Mobile, API, Infrastructure)', 'Vulnerability Assessment', 'Reverse Engineering', 'Phishing Simulation', 'Security Reporting'],
    },
    {
        label: 'Methodologies',
        skills: ['Black-box and Gray-box Penetration Testing'],
    },
    {
        label: 'Frameworks & Standards',
        skills: ['OWASP WSTG', 'OWASP MSTG/MASTG', 'CVSS v3', 'PTES'],
    },
    {
        label: 'Tools & Technologies',
        skills: ['Burp Suite', 'Nmap', 'Nessus', 'Frida', 'MobSF', 'Ghidra'],
    },
    {
        label: 'Scripting',
        skills: ['Python (Security & Automation)', 'Bash'],
    },
    {
        label: 'Soft-Skills & Leadership',
        skills: ['Technical Communication', 'Team Mentorship', 'Knowledge Sharing'],
    },
    {
        label: 'Languages',
        skills: ['English (IELTS 6.5)', 'Indonesian (Native)'],
    },
];

const questLog = [
    { role: 'Cyber Security Consultant I', company: 'Spentera', period: 'July 2023 – Present' },
    { role: 'Junior Vulnerability Analyst', company: 'PT Visionet Data International', period: 'June 2022 – May 2023' },
];

const researchInterests = [
    'Vehicle Security',
    'iOS Security (side-gig)',
];

export default function About() {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimated(true), 150);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.profilePage}>
            {}
            <div style={{ marginBottom: '1.5rem', display: 'flex' }}>
                <Link href="/" className={styles.backLobby}>
                    <span style={{ marginRight: '0.5rem', display: 'inline-block', transition: 'transform 0.2s' }}>◀</span> Back to Lobby
                </Link>
            </div>

            {}
            <nav className={styles.tabBar}>
                <a href="#attributes" className={`${styles.tab} ${styles.tabActive}`}>Attributes</a>
                <a href="#forte" className={styles.tab}>Forte</a>
                <a href="#certifications" className={styles.tab}>Certifications</a>
                <a href="#echoes" className={styles.tab}>Echoes</a>
            </nav>

            {}
            <section id="attributes" className={styles.heroSection}>
                {}
                <div className={styles.infoPanel}>
                    {}
                    <div className={styles.nameBlock}>
                        <h1>REI</h1>
                        <p>Cyber Security Consultant I</p>
                    </div>

                    {}
                    <div className={styles.xpSection}>
                        <div className={styles.xpHeader}>
                            <span className={styles.xpLevel}>UL. 20</span>
                            <span className={styles.xpValue}>XP: 10,000</span>
                        </div>
                        <div className={styles.xpBar}>
                            <div
                                className={styles.xpFill}
                                style={{ width: animated ? '75%' : '0%' }}
                            />
                        </div>
                        <span className={styles.xpSubtitle}>Security Researcher</span>
                    </div>

                    {}
                    <div>
                        <p className={styles.sectionLabel}>Stats</p>
                        <div className={styles.statsSection}>
                            {stats.map((stat, i) => (
                                <div key={i} className={styles.statItem}>
                                    <div className={styles.statHeader}>
                                        <span className={styles.statName}>{stat.name}</span>
                                        <span className={styles.statScore}>{stat.score}/100</span>
                                    </div>
                                    <div className={styles.statBar}>
                                        <div
                                            className={styles.statFill}
                                            style={{ width: animated ? `${stat.score}%` : '0%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {}
                    <div className={styles.bioSection}>
                        <p className={styles.sectionLabel}>Bio</p>
                        <p className={styles.bioText}>
                            Cybersecurity Professional with 3+ years of experience and 100+ completed penetration testing assessments across Web, API, Mobile, and Infrastructure, with 40% focusing on mobile application security and 35% focusing on Infrastructure Security. Specialized in delivering penetration testing services for clients across the financial services sector. Produced comprehensive technical security findings and formulated remediation plans for clients, successfully eliminating 70% of identified security findings within financial services sectors.
                        </p>
                    </div>

                    {}
                    <div id="certifications">
                        <p className={styles.sectionLabel}>Certifications</p>
                        <div className={styles.certRow}>
                            {certifications.map((cert, i) => (
                                <div key={i} className={styles.certCard}>
                                    <div className={styles.certIcon}>
                                        <Image
                                            src={cert.img}
                                            alt={cert.alt}
                                            width={44}
                                            height={44}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <span className={styles.certName}>{cert.fullName}</span>
                                    <span className={styles.certYear}>{cert.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {}
                <div className={styles.portraitFrame}>
                    <Image
                        src="/mornye-about.jpg"
                        alt="Mornye"
                        width={400}
                        height={600}
                        quality={100}
                        priority
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                    />
                </div>
            </section>

            {}
            <section id="forte" className={styles.fullSection}>
                <p className={styles.sectionLabel}>Forte</p>
                {skillCategories.map((cat, i) => (
                    <div key={i}>
                        <p className={styles.skillCategory}>{cat.label}</p>
                        <div className={styles.skillTags}>
                            {cat.skills.map((skill, j) => (
                                <span key={j} className={styles.skillTag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {}
            <section id="echoes" className={styles.fullSection}>
                <p className={styles.sectionLabel}>Echoes</p>
                <div className={styles.echoesGrid}>
                    {}
                    <div className={styles.echoCard}>
                        <p className={styles.echoLabel}>Work Experience Log</p>
                        {questLog.map((quest, i) => (
                            <div key={i} className={styles.questEntry}>
                                <p className={styles.questRole}>{quest.role}</p>
                                <p className={styles.questCompany}>{quest.company} · {quest.period}</p>
                            </div>
                        ))}
                    </div>

                    {}
                    <div className={styles.echoCard}>
                        <p className={styles.echoLabel}>Education</p>
                        <p className={styles.eduDegree}>Bachelor of Science (BS) in Information Systems Audit</p>
                        <p className={styles.eduSchool}>BINUS University · August 2018 – April 2022</p>
                    </div>

                    {}
                    <div className={styles.echoCard}>
                        <p className={styles.echoLabel}>Research Interests</p>
                        {researchInterests.map((interest, i) => (
                            <p key={i} className={styles.researchItem}>• {interest}</p>
                        ))}
                    </div>

                    {}
                    <div className={styles.echoCard}>
                        <p className={styles.echoLabel}>Contact</p>
                        <div className={styles.contactLinks}>
                            <a href="https://github.com/recreat0rz" target="_blank" rel="noopener noreferrer" className={styles.contactLink} aria-label="GitHub">
                                <svg height="24" viewBox="0 0 16 16" width="24"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
                            </a>
                            <a href="https://x.com/ReCreat0rz" target="_blank" rel="noopener noreferrer" className={styles.contactLink} aria-label="X / Twitter">
                                <svg viewBox="0 0 24 24" height="24" width="24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </a>
                            <a href="https://discord.com/users/426490670438678530" target="_blank" rel="noopener noreferrer" className={styles.contactLink} aria-label="Discord">
                                <svg viewBox="0 0 24 24" height="24" width="24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"></path></svg>
                            </a>
                            <a href="https://medium.com/@recreat0rz" target="_blank" rel="noopener noreferrer" className={styles.contactLink} aria-label="Medium">
                                <svg viewBox="0 0 24 24" height="24" width="24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 1.5 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.echoesPhoto}>
                    <Image
                        src="/defcon-creator-stage.jpg"
                        alt="Rei at DEF CON Creator Stage"
                        width={1200}
                        height={1600}
                        sizes="(max-width: 900px) calc(100vw - 3rem), 1000px"
                    />
                </div>
            </section>
        </div>
    );
}
