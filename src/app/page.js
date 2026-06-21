import Image from "next/image";
import Link from "next/link";
import TerminalHero from "@/components/TerminalHero";
import TypingAnimation from "@/components/TypingAnimation";
import styles from "./home.module.css";

const navItems = [
    { icon: "📋", title: "About", subtitle: "Character Profile", href: "/about" },
    { icon: "💼", title: "Experience", subtitle: "Journey Log", href: "/experience" },
    { icon: "🔬", title: "Blog", subtitle: "Field Notes", href: "/blog" },
    { icon: "🛠️", title: "Projects", subtitle: "Arsenal", href: "/projects" },
];

export default function Home() {
    return (
        <div className={styles.homePage}>
            {}
            <div className={styles.bannerWrapper}>
                <Image
                    src="/mornye-home.jpg"
                    alt="Mornye"
                    width={1000}
                    height={420}
                    className={styles.bannerImage}
                    quality={100}
                    priority
                />
            </div>

            {}
            <div className={styles.introCard}>
                <div className={styles.introInfo}>
                    <h1 className={styles.introName}>ReCreat0rz</h1>
                    <div className={styles.introSubtitle}>
                        <TypingAnimation words={["Reverse Engineer"]} />
                    </div>
                </div>
                <div className={styles.introSocials}>
                    <a href="https://github.com/recreat0rz" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                        <svg height="28" viewBox="0 0 16 16" width="28"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
                    </a>
                    <a href="https://x.com/ReCreat0rz" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X / Twitter">
                        <svg viewBox="0 0 24 24" height="28" width="28"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    </a>
                    <a href="https://discord.com/users/426490670438678530" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Discord">
                        <svg viewBox="0 0 24 24" height="28" width="28"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"></path></svg>
                    </a>
                    <a href="https://medium.com/@recreat0rz" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Medium">
                        <svg viewBox="0 0 24 24" height="28" width="28"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 1.5 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path></svg>
                    </a>
                </div>
            </div>

            {}
            <div className={styles.navGrid}>
                {navItems.map((item, i) => (
                    <Link key={i} href={item.href} className={styles.navCard}>
                        <span className={styles.navIcon}>{item.icon}</span>
                        <span className={styles.navTitle}>{item.title}</span>
                        <span className={styles.navSubtitle}>{item.subtitle}</span>
                    </Link>
                ))}
            </div>

            {}
            <div className={styles.terminalSection}>
                <TerminalHero />
            </div>
        </div>
    );
}
