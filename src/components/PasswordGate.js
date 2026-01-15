'use client';

import { useState, useEffect } from 'react';
import styles from './PasswordGate.module.css';

const MAX_ATTEMPTS = 3;

export default function PasswordGate({ children }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if previously authenticated in this session
    const authStatus = sessionStorage.getItem('blog_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    // Check failed attempts from localStorage
    const storedAttempts = parseInt(localStorage.getItem('password_attempts') || '0');
    if (storedAttempts >= MAX_ATTEMPTS) {
      setIsLocked(true);
      setAttempts(storedAttempts);
    } else {
      setAttempts(storedAttempts);
    }
    
    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLocked) return;

    const correctPassword = process.env.NEXT_PUBLIC_BLOG_PASSWORD;

    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('blog_authenticated', 'true');
      localStorage.setItem('password_attempts', '0'); // Reset on success
      setError('');
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem('password_attempts', newAttempts.toString());
      
      if (newAttempts >= MAX_ATTEMPTS) {
        setIsLocked(true);
        setError('Maximum attempts reached. Access denied.');
      } else {
        setError('Invalid password. Please try again.');
        // Clear input on error
        setPassword('');
      }
    }
  };

  if (isLoading) {
    return <div className={styles.overlay} />; // Empty overlay while checking storage
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
              placeholder="Enter Password"
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
            {isLocked ? 'SYSTEM LOCKED' : 'Unlock Access'}
          </button>
        </form>

        <div className={styles.errorMessage}>{error}</div>
      </div>
    </div>
  );
}
