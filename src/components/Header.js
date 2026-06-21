import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">ReCreat0rz</Link>
            </div>
        </header>
    );
};

export default Header;
