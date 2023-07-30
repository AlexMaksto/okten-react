import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {moviesService} from "../../services";
import {MovieInfo} from "./MovieInfo/MovieInfo";
import css from "../../styles/MovieList.module.css";
import {maxPage, minPage} from "../../constans";


const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    let {page} = useParams();
    page = page ? page : 1;

    useEffect(() => {
        moviesService.getAll(page)
            .then(({data}) => setMovies(data.results))
            .catch(e => console.log(e))
    }, [page]);

    const navigate = useNavigate();

    function handleClickPrev() {
        page = page - 1
        navigate(`../movies/${page}`)
    }

    function handleClickNext() {
        page = +page + 1;
        navigate(`../movies/${page}`)
    }

    return (
        <div>
            <div className={css.MovieList}>
                {movies?.map(movie => <MovieInfo movie={movie} key={movie.id}/>)}
            </div>
            <div className={css.Button}>
                {page > minPage && <button onClick={handleClickPrev}>Prev</button>}
                {(page < maxPage || !page) && <button onClick={handleClickNext}>Next</button>}
            </div>
        </div>
    );
};

export {MoviesList};