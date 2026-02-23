'use client';

import { useState } from 'react';
import TypingAnimation from './TypingAnimation';
import styles from './TerminalHero.module.css';

const TerminalHero = () => {
    const [showOutput, setShowOutput] = useState(false);

    return (
        <section className={styles.hero}>
            <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                    <div className={`${styles.circle} ${styles.red}`}></div>
                    <div className={`${styles.circle} ${styles.yellow}`}></div>
                    <div className={`${styles.circle} ${styles.green}`}></div>
                </div>
                <div className={styles.terminalBody}>
                    <div className={styles.line}>
                        <span className={styles.prompt}>root@recreat0rz:~#</span>
                        <span className={styles.command}>
                            <TypingAnimation 
                                words={["cat quote.txt"]} 
                                loop={false} 
                                typingSpeed={50} 
                                onComplete={() => setShowOutput(true)}
                                showCursor={!showOutput}
                            />
                        </span>
                    </div>
                    {showOutput && (
                        <div className={`${styles.output} ${styles.quoteOutput}`}>
                            <TypingAnimation 
                                words={['"I fear not the man who has practiced 10,000 kicks once, but I fear the man who had practiced one kick 10,000 times." - Bruce Lee']} 
                                loop={false} 
                                typingSpeed={30}
                                showCursor={true}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TerminalHero;
