import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {moviesService} from "../../services";
import {MovieListCardView} from "./MoviesListCardView/MovieListCardView";

const MoviesListCard = () => {
    const [movie, setMovie] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        moviesService.getById(id)
            .then(({data}) => setMovie(data))
            .catch(e => console.log(e))
    }, [id]);

    return (
        <div>
            {movie && <MovieListCardView movie={movie}/>}
        </div>
    );
};

export {MoviesListCard};