import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.footerContent}>
                <div>Stream List</div>
                <hr className={styles.hrLine} />
                <div>Built with Next.js</div>
            </div>
        </footer>
    );
}