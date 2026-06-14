import styles from './experience.module.css';

export const metadata = {
    title: 'Experience | ReCreat0rz',
};

export default function Experience() {
    const workExperience = [
        {
            company: 'Spentera',
            role: 'Cyber Security Consultant I',
            period: 'July 2023 - Present',
            description: [
                'Mentored 3 junior penetration testers throughout security assessment lifecycles to achieve zero false positives and 100% deliverable accuracy.',
                'Engineered an entry-level internal Windows penetration testing lab simulating 4 distinct attack vectors (brute-force, default credentials, RCE, scheduled tasks), successfully exploited by 165 participants with 73 achieving full SYSTEM compromise.',
                'Developed a Hacktrace Independence Day Competition (HIDC) 2024 Windows challenge lab combining CVE-2024-27198 (TeamCity auth bypass to RCE) with registry permission abuse for privilege escalation.',
                'Executed comprehensive security assessments for financial institutions, uncovering high-severity vulnerabilities in mobile banking applications, including transaction logic flaws (admin fee/payment reductions, negative transfer, Insecure Direct Object References via Someone\'s Account Number) in Transfer and Top Up & Bills Feature.',
                'Directed an internal knowledge-sharing session on the 8ksec ClearRoute iOS reverse engineering challenge, demonstrating static analysis and proxy detection bypass techniques.',
                'Implemented 1 phishing simulation campaign for a financial institution to evaluate and enhance organizational security awareness.'
            ]
        },
        {
            company: 'PT Visionet Data International',
            role: 'Junior Vulnerability Analyst',
            period: 'June 2022 – May 2023',
            description: [
                'Orchestrated automated and white-box vulnerability assessments across 1,000+ enterprise-wide servers including Windows and Linux.',
                'Performed black-box penetration testing on 1 web application and applied reverse engineering (binary analysis) on 2 mobile applications.'
            ]
        }
    ];

    const workshops = [
        {
            company: 'DEFCON Singapore',
            role: 'ICS Village',
            period: 'March 2026',
            description: [
                'Applied critical thinking and hands-on experimentation with simulated ICS hardware to analyze industrial water-pipe system operations. Successfully completed the challenge by leveraging OSINT techniques to unlock PIN to gain access to water-pipe system operations and reconfiguring the water-pipe system to restore normal flow operations.'
            ]
        },
        {
            company: 'Positive Hack Talks',
            role: 'Hopping on Test Benches and Car Hacking',
            period: 'July 2025',
            description: [
                'Acquired foundational knowledge of vehicle hardware interfaces and protocols, including CAN, UART, JTAG, and SPI, as well as vehicle attack surfaces such as rollback attacks and unauthorized CAN exploitation.'
            ]
        }
    ];

    const researchExperience = [
        {
            company: 'BINUS University',
            role: 'The Factors Affecting the Intention of Use in Cloud Technology',
            period: 'July 2021 – February 2022',
            description: [
                'Conducted extensive research as the primary requirement for the Bachelor of Science (BS) in Information Systems Audit. The objective of this research was to determine the factors affecting the intention to use in cloud technology. Structural Equation Model (SEM) & Testing of the Structural Model (Inner Model) analysis demonstrated that Access Control, Security Services, Notifications, and Guarantees (Warranty) significantly affect the intention to use in cloud technology. Research was completed successfully and graded B-.'
            ]
        }
    ];

    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 className={styles.title}>Work Experience</h1>
            
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

            <h1 className={styles.title} style={{ marginTop: '4rem' }}>Workshop / Conference</h1>
            
            <div className={styles.timeline}>
                {workshops.map((event, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineContent}>
                            <div className={styles.jobHeader}>
                                <h3 className={styles.role}>{event.role}</h3>
                                <span className={styles.period}>{event.period}</span>
                            </div>
                            <h4 className={styles.company}>{event.company}</h4>
                            <ul className={styles.description}>
                                {event.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className={styles.title} style={{ marginTop: '4rem' }}>Research Experience</h1>
            
            <div className={styles.timeline}>
                {researchExperience.map((event, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineContent}>
                            <div className={styles.jobHeader}>
                                <h3 className={styles.role}>{event.role}</h3>
                                <span className={styles.period}>{event.period}</span>
                            </div>
                            <h4 className={styles.company}>{event.company}</h4>
                            <ul className={styles.description}>
                                {event.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
