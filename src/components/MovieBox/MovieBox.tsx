import styles from './MovieBox.module.css';
import Image from 'next/image';
import { Suspense } from 'react';
import format from 'date-fns/format';

export interface IMovieProp  {
    backDropSize: string;
    imagePath: string;
    originalTitle: string;
    title: string;
    vote_average: number;
    release_date: string;
    overview: string;
}

function MovieBox(prop: IMovieProp) {

    const {
        backDropSize,
        release_date, imagePath, originalTitle,
        title, vote_average
    } = prop;
    
    const baseImageUrl = 'https://image.tmdb.org/t/p'
    const formattedDate = format(new Date(release_date), "d MMMM yyyy");
    return (
        <article className={styles.movieBox}>
            <Suspense fallback={<div>LOADING...</div>}>
                <div className={styles.imgContainer}>
                    <Image
                        src={`${baseImageUrl}/${backDropSize}${imagePath}`}
                        alt={originalTitle}
                        className={styles.imgObj}
                        width={400}
                        height={300}
                    />
                    {/* <p className={styles.overview}>{prop.overview}</p> */}
                </div>
            </Suspense>
            <div className={styles.movieTitle}>{title}</div>
            <div className={styles.movieRating}>Rating:<b>&nbsp;{Math.floor(vote_average * 10)}</b>%</div>
            <div className={styles.releaseDate}>Released:<b>&nbsp; {formattedDate}</b></div>
        </article>
    )
}

export default MovieBox;