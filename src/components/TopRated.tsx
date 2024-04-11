import { ISectionProp } from "@/lib/types";
import MovieSection from "./MovieSection/MovieSection";
import Movie, { IMovieProp } from "./Movie/Movie";
import { getMoviesData } from "@/lib/getData";


export default async function TopRated(movieProp: ISectionProp) {
    let movies;
    const {backDropSize, sectionName} = movieProp;

    try {
        movies = await getMoviesData('top_rated');
    } catch (error: any) {
        return (
            <MovieSection sectionName={sectionName}>
                <div>Error in Connection</div>
            </MovieSection>
        );
    }
    
    const moviesArray = movies.results.map((movie: any) => {
        const prop: IMovieProp = {
            backDropSize: backDropSize,
            imagePath: movie.backdrop_path,
            originalTitle: movie.original_title,
            title: movie.title,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
            overview: movie.overview
        }
        return <Movie key={movie.id} {...prop}/>
    })
    return (
        <MovieSection sectionName={sectionName}>
            {...moviesArray}
        </MovieSection>
    );
}