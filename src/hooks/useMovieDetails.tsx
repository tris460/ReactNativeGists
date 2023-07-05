import { useEffect, useState } from "react";
import movieDb from "../api/movieDb";
import { FullMovie } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
    cast: Cast[];
    isLoading: boolean;
    movieData?: FullMovie;
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieData: undefined,
        cast: []
    });

    const getMovieDetails = async() => {
        const movieDetailsPromise = movieDb.get<FullMovie>(`/${movieId}`);
        const castPromise = movieDb.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsRes, castPromiseRes] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieData: movieDetailsRes.data,
            cast: castPromiseRes.data.cast,
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])
    
    return {
        ...state
    }
}