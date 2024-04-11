import { ISectionProp } from "@/lib/types";
import MovieSection from "./MovieSection/MovieSection";
import MovieBox, { IMovieProp } from "./Movie/Movie";
import { getMoviesData } from "@/lib/getData";


export default async function New(SectionProp: ISectionProp) {
    let movies;
    const {backDropSize, sectionName} = SectionProp;

    try {
        movies = await getMoviesData('upcoming');
    } catch (error: any) {
        return (
            <MovieSection sectionName={sectionName}>
                <div>Error in Connection</div>
            </MovieSection>
        );
    }
    
    const MoviesArray = movies.results.map((movie: any) => {
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
    });


    return (
        <MovieSection sectionName={sectionName}>
            {...MoviesArray}
        </MovieSection>
    );
}