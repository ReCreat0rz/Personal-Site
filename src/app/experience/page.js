import styles from './experience.module.css';

export const metadata = {
    title: 'Experience | ReCreat0rz',
};

export default function Experience() {
    const workExperience = [
        {
            company: 'Indonesia - Hybrid',
            role: 'Cyber Security Consultant I',
            period: 'October 2025 – Present',
            description: [
                'Led 180+ penetration testing engagements across Web, API, Mobile, and Infrastructure, with 40% focusing on mobile application security.',
                'Implemented 1 phishing simulation campaign for a financial institution to evaluate and enhance organizational security awareness.',
                'Executed security assessments for financial institutions, uncovering critical vulnerabilities in mobile banking applications.',
                'Mentored 3 junior penetration testers throughout security assessment lifecycles to achieve zero false positives and 100% deliverable accuracy.',
                'Led client engineering teams through remediation execution to successfully remediate 80% of identified security findings.',
                'Delivered technical security findings, exploitation pathways, and remediation roadmaps to engineering teams, decreasing remediation time by 70%.',
                'Directed an internal knowledge-sharing session on the 8ksec ClearRoute iOS reverse engineering challenge, illustrating static analysis and proxy detection bypass techniques.'
            ]
        },
        {
            company: 'Indonesia - Onsite',
            role: 'Junior Penetration Tester',
            period: 'July 2023 – October 2025',
            description: [
                'Drove 100+ end-to-end penetration testing projects across Web, API, Mobile, and Infrastructure domains following OWASP WSTG and MSTG standards.',
                'Authored penetration testing reports detailing exploitation findings and mitigation guidelines.',
                'Partnered with engineering units on vulnerability patching strategies, shortening the time-to-fix for security flaws by 80%.'
            ]
        },
        {
            company: 'Indonesia - Onsite',
            role: 'Junior Vulnerability Analyst',
            period: 'June 2022 – May 2023',
            description: [
                'Orchestrated automated and white-box vulnerability assessments across 1,000+ enterprise-wide assets.',
                'Troubleshot root causes for network scan failures across targeted IP ranges, establishing structured escalation workflows to Tier-2 Vulnerability Analysts.',
                'Performed black-box penetration testing on 1 web application and applied reverse engineering (binary analysis) on 2 mobile applications.',
                'Formulated reports detailing exploit paths, vulnerability severity, and immediate remediation steps.'
            ]
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
        </div>
    );
}
