const baseURL = 'https://api.themoviedb.org';
const serverURL = '/3'
const movies = `${serverURL}/discover/movie`
const movie = `${serverURL}/movie`
const genres = `${serverURL}/genre/movie/list`
const account =`${serverURL}/account`
const imagURL = 'https://image.tmdb.org/t/p/original';

const urls = {
    movies: {
        page: (page) => `${movies}?page=${page}`
    },
    genres,
    movie: {
        byId: (id) => `${movie}/${id}`
    },
    account: {
        byId: (id) => `${account}/${id}`
    }
}

export {
    baseURL,
    urls,
    imagURL
}
