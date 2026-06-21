import PaginatedPostList from '../../components/PaginatedPostList';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Posts() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="container" style={{ padding: '2rem' }}>
            {}
            <div style={{ marginBottom: '1.5rem', display: 'flex' }}>
                <Link href="/" className="back-lobby-link">
                    <span>◀</span> Back to Lobby
                </Link>
            </div>

            <header style={{ marginBottom: '2.5rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--primary-color)',
                    textShadow: 'var(--glow-text)',
                    marginBottom: '0.5rem'
                }}>
                    Blog
                </h1>
                <div style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--primary-color), transparent)',
                    marginTop: '1rem',
                    borderRadius: '2px'
                }} />
            </header>

            <PaginatedPostList posts={allPostsData} />
        </div>
    );
}
