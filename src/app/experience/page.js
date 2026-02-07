import styles from './experience.module.css';

export const metadata = {
    title: 'Experience | ReCreat0rz',
};

export default function Experience() {
    const workExperience = [
        {
            company: 'Indonesia - Hybrid',
            role: 'Senior Penetration Tester',
            period: 'October 2025 – Present',
            description: [
                'Performed 140+ penetration testing projects across Web, API, Mobile (Android & iOS), and Infrastructure, with 40% focused on mobile applications.',
                'Conducted penetration testing services for major banking institutions with a primary focus on mobile applications.',
                'Lead Junior Penetration Tester during penetration testing activities.',
                'Assisted the client in implementing vulnerability mitigation recommendations.',
                'Created detailed reports of penetration testing results using CVSS v3 and OWASP scoring methodologies.',
                'Presented penetration testing findings to clients in a clear and professional manner.',
                'Performed retest on previously identified vulnerabilities after fixing, and prepared the final reports outlining retesting results.'
            ]
        },
        {
            company: 'Indonesia - Onsite',
            role: 'Junior Penetration Tester',
            period: 'July 2023 – October 2025',
            description: [
                'Handled 100+ penetration testing projects, including Web, API, Mobile Applications (Android & iOS), and Infrastructure,based on OWASP WSTG and MSTG standards.',
                'Created detailed reports of penetration testing results using CVSS v3 and OWASP scoring methodologies.',
                'Presented penetration testing findings to clients in a clear and professional manner.',
                'Performed retest on previously identified vulnerabilities after fixing, and prepared the final reports outlining retestingresults.'
            ]
        },
        {
            company: 'Indonesia - Remote',
            role: 'Machine Maker',
            period: 'April 2024 – July 2024',
            description: [
                'Developed "Easy-Difficulty" Windows Lab Machines named Syringe and Rocket.'
            ]
        },
        {
            company: 'Indonesia - Onsite',
            role: 'Junior Vulnerability Analyst',
            period: 'June 2022 – May 2023',
            description: [
                'Performed initial and follow-up scans on tens of thousands of assets using a white-box approach.',
                'Analyzed root causes for scanning failures on specific IP addresses and escalated unresolved issues to Vulnerability Assessment Tier 2 for further investigation.',
                'Compiled detailed reports on asset scanning results for documentation.',
                'Conducted penetration testing using a black-box approach to assess web & mobile application (binary checking).',
                'Prepared comprehensive reports outlining findings, severity, and recommendations from penetration testing activities.'
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
