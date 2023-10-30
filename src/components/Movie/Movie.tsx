import { Suspense } from 'react';
import MovieBox from '../MovieBox/MovieBox';
import styles from './Movie.module.css';
import getConfig from '@/lib/getData';
import { IReactNodeProp } from '@/lib/types';



async function Movies({children, sectionName}: IReactNodeProp) {
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

export default Movies;