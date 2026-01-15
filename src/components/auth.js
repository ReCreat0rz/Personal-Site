'use client';

import { useState, useEffect } from 'react';
import styles from './auth.module.css';

export default function Auth({ children }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const MAX_ATTEMPTS = parseInt(process.env.NEXT_PUBLIC_MAX_ATTEMPTS || 0x3);
  const LOCKOUT_DURATION = 0x493E0; 

  useEffect(() => {
    const authStatus = sessionStorage.getItem('blog_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    const checkLockout = () => {
      const storedAttempts = parseInt(localStorage.getItem('password_attempts') || '0');
      const lockoutUntil = parseInt(localStorage.getItem('password_lockout_until') || '0');
      const now = Date.now();

      if (lockoutUntil > now) {
        setIsLocked(true);
        setLockoutTime(Math.ceil((lockoutUntil - now) / 1000));
        setAttempts(storedAttempts);
      } else if (storedAttempts >= MAX_ATTEMPTS) {
        localStorage.setItem('password_attempts', '0');
        localStorage.removeItem('password_lockout_until');
        setIsLocked(false);
        setAttempts(0);
        setError('');
      } else {
        setAttempts(storedAttempts);
        setIsLocked(false);
      }
    };

    checkLockout();
    setIsLoading(false);

    const timer = setInterval(checkLockout, 1000);
    return () => clearInterval(timer);
  }, [MAX_ATTEMPTS]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLocked) return;

    const correctPassword = process.env.NEXT_PUBLIC_BLOG_PASSWORD;

    if (password.trim() === correctPassword?.trim()) {
      setIsAuthenticated(true);
      sessionStorage.setItem('blog_authenticated', 'true');
      localStorage.setItem('password_attempts', '0');
      localStorage.removeItem('password_lockout_until');
      setError('');
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem('password_attempts', newAttempts.toString());
      
      if (newAttempts >= MAX_ATTEMPTS) {
        const until = Date.now() + LOCKOUT_DURATION;
        localStorage.setItem('password_lockout_until', until.toString());
        setIsLocked(true);
        setLockoutTime(LOCKOUT_DURATION / 1000);
        setError('Too many attempts. Access locked for 5 minutes.');
      } else {
        setError('Invalid password. Please try again.');
        setPassword('');
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return <div className={styles.overlay} />;
  }

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <h1 className={styles.title}>ACCESS RESTRICTED</h1>
        <p className={styles.subtitle}>
          In order to access the blog, Please provide the password to view the contents
        </p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={isLocked ? `Try again in ${formatTime(lockoutTime)}` : "Enter Password"}
              className={`${styles.input} ${error && !isLocked ? styles.error : ''}`}
              disabled={isLocked}
              autoFocus
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.button}
            disabled={isLocked || !password}
          >
            {isLocked ? 'LOCKED' : 'Unlock Access'}
          </button>
        </form>

        <div className={styles.errorMessage}>{error}</div>
      </div>
    </div>
  );
}
