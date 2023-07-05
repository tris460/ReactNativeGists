import React, { useEffect, useState } from 'react'
import movieDb from '../api/movieDb'
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface'

const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieDb.get<MovieDBNowPlaying>('/now_playing');
        setMovies(resp.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        movies,
        isLoading
    }
}

export default useMovies
