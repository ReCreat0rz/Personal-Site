import styles from './experience.module.css';

export const metadata = {
    title: 'Experience | ReCreat0rz',
};

export default function Experience() {
    const workExperience = [
        {
            company: 'Confidential',
            role: 'Senior Penetration Tester',
            period: 'October 2025 – Present',
            description: [
                'Performed 140+ penetration testing projects across Web, API, Mobile, and Infrastructure.',
                'Focused on mobile applications for major banking institutions in Indonesia.',
                'Led Junior Penetration Testers during team activities.',
                'Assisted clients with vulnerability mitigation and detailed reporting based on industry standards (CVSS v3, OWASP).'
            ]
        },
        {
            company: 'Confidential',
            role: 'Junior Penetration Tester',
            period: 'July 2023 – October 2025',
            description: [
                'Managed 100+ projects following OWASP WSTG and MSTG standards.',
                'Presented high and critical risk findings to clients.',
                'Conducted retests to verify vulnerability remediation.'
            ]
        },
        {
            company: 'Confidential',
            role: 'Machine Maker',
            period: 'April 2024 – July 2024',
            description: [
                'Developed "Easy-Difficulty" Windows Lab Machines named Syringe and Rocket.'
            ]
        },
        {
            company: 'Confidential',
            role: 'Vulnerability Analyst, Jr',
            period: 'June 2022 – May 2023',
            description: [
                'Performed white-box initial and follow-up scans on tens of thousands of assets.',
                'Analyzed scanning failures and escalated issues to Tier 2 vulnerability management.',
                'Conducted black-box penetration testing on web and mobile application binaries.'
            ]
        }
    ];

    const certifications = [
        { title: 'OffSec Certified Professional+ (OSCP+)', period: 'Sept 2025 – Sept 2028' },
        { title: 'OffSec Certified Professional (OSCP)', period: 'Issued Sept 2025' },
        { title: 'Certified Ethical Hacker (CEH) - EC-Council', period: 'Mar 2020 – Mar 2023' }
    ];

    const education = [
        {
            school: 'BINUS University',
            degree: 'Bachelor of Science in Information Systems Audit',
            period: 'Aug 2018 – Apr 2022',
            gpa: '3.47 / 4.00'
        }
    ];

    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 className={styles.title}>Professional Experience</h1>
            
            <div className={styles.timeline}>
                {workExperience.map((job, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineContent}>
                            <div className={styles.jobHeader}>
                                <h3 className={styles.role}>{job.role}</h3>
                                <span className={styles.period}>{job.period}</span>
                            </div>
                            <h4 className={styles.company}>{job.company}</h4>
                            <ul className={styles.description}>
                                {job.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.gridContainer}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Certifications</h2>
                    <div className={styles.cardsGrid}>
                        {certifications.map((cert, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.certIcon}>🛡️</span>
                                    <span className={styles.cardPeriod}>{cert.period}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{cert.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    {education.map((edu, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.eduIcon}>🎓</span>
                                <span className={styles.cardPeriod}>{edu.period}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{edu.school}</h3>
                            <p className={styles.cardSubtitle}>{edu.degree}</p>
                            <div className={styles.gpaBadge}>GPA: {edu.gpa}</div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
