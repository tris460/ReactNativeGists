import React, { useEffect, useState } from 'react'
import movieDb from '../api/movieDb'
import { Movie, MovieDB } from '../interfaces/movieInterface'

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {
        try {
            const nowPlayingPromise = movieDb.get<MovieDB>('/now_playing');
            const popularPromise = movieDb.get<MovieDB>('/popular');
            const topRatedPromise = movieDb.get<MovieDB>('/top_rated');
            const upcomingPromise = movieDb.get<MovieDB>('/upcoming');
    
            const response = await Promise.all([
                nowPlayingPromise,
                popularPromise,
                topRatedPromise,
                upcomingPromise
            ]);
    
            setMoviesState({
                nowPlaying: response[0].data.results,
                popular: response[1].data.results,
                topRated: response[2].data.results,
                upcoming: response[3].data.results,
            })
            setIsLoading(false);
        } catch (err) {
            console.error('Error getting movies: ', err);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}

export default useMovies
