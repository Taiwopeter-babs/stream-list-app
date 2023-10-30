'use client'
import styles from './Header.module.css';
import useScrollDirection from '@/lib/useScrollDirection';

export default function Header() {
    const scrollDir = useScrollDirection();
    return (
        <header className={`${styles.Header} ${scrollDir === 'down' ? 'hide' : 'show'}`}>
            <div className={styles.headerContent}>
                Stream List
            </div>
        </header>
    )
}