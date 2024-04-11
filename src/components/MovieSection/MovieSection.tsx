import { Suspense } from 'react';
import styles from './MovieSection.module.css';
import { IReactNodeProp } from '@/lib/types';



async function MovieSection({children, sectionName}: IReactNodeProp) {
    return (

        <section className={styles.movieSection}>
            <div className={styles.sectionName}>{sectionName} Movies</div>
            <div className={styles.movieContainer}>
                <Suspense fallback={<div>Loading...</div>}>
                    {children}
                </Suspense>
            </div>
        </section>
    )
}

export default MovieSection;