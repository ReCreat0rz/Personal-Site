'use client';

import { useState, useEffect } from 'react';
import styles from './TerminalHero.module.css';

const quotes = [
    { text: `"I fear not the man who has practiced 10,000 kicks once, but I fear the man who had practiced one kick 10,000 times."`, author: "Bruce Lee" },
    { text: `"Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success."`, author: "Robert T. Kiyosaki" },
    { text: `"Failure is so important. We speak about success all the time. It is the ability to resist failure or use failure that often leads to greater success. I've met people who don't want to try for fear of failing."`, author: "J.K. Rowling" },
    { text: `"I have not failed. I've just found 10,000 ways that won't work."`, author: "Thomas A. Edison" }
];

const TerminalHero = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                setFade(true);
            }, 500); // Wait for fade out
        }, 8000); // Change quote every 8 seconds

        return () => clearInterval(interval);
    }, []);

    const currentQuote = quotes[currentQuoteIndex];

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
                        <span className={styles.command}>cat quote.txt</span>
                    </div>
                    <div 
                        className={`${styles.output} ${styles.quoteOutput}`}
                        style={{ 
                            opacity: fade ? 1 : 0, 
                            transition: 'opacity 0.5s ease-in-out',
                            minHeight: '4.5em' // Prevent layout shift
                        }}
                    >
                        {`${currentQuote.text} - ${currentQuote.author}`}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TerminalHero;
