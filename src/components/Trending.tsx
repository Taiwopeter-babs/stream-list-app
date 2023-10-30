import { ISectionProp } from "@/lib/types";
import Movies from "./Movie/Movie";
import MovieBox, { IMovieProp } from "./MovieBox/MovieBox";
import { getMoviesData } from "@/lib/getData";


export default async function Popular(MovieProp: ISectionProp) {
    let movies;
    const {backDropSize, sectionName} = MovieProp;

    try {
        movies = await getMoviesData('popular');
    } catch (error: any) {
        return (
            <Movies sectionName={sectionName}>
                <div>Error in Connection</div>
            </Movies>
        );
    }
    
    const MovieBoxArray = movies.results.map((movie: any) => {
        const prop: IMovieProp = {
            backDropSize: backDropSize,
            imagePath: movie.backdrop_path,
            originalTitle: movie.original_title,
            title: movie.title,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
            overview: movie.overview
        }
        return <MovieBox key={movie.id} {...prop}/>
    })
    return (
        <Movies sectionName={sectionName}>
            {...MovieBoxArray}
        </Movies>
    );
}