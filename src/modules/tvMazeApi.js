const fetchApi = async () => {
    const getMovie = await fetch(`https://api.tvmaze.com/search/shows?q=girls`);

    const allMovies = getMovie.json();
    return allMovies;
}

export default fetchApi