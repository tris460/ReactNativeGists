import axios from "axios";

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'b09ad543cfef194917c4d4da58a0d2ff',
        language: 'es-ES'
    }
})

export default movieDb;