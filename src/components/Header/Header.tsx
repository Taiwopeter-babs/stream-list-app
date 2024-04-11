'use client'
import styles from './Header.module.css';


export default function Header() {
    return (
        <header className={`${styles.Header}`}>
            <div className={styles.headerContent}>
                Stream List
            </div>
        </header>
    )
}