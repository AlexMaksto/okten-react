import css from "../../../styles/MovieListCard.module.css";
import {PosterPreview} from "../../MoviesList/MovieInfo/PosterPreview/PosterPreview";
import {StarsRating} from "../../MoviesList/MovieInfo/StarsRating/StarsRating";

const MovieListCardView = ({movie}) => {
    const {
        adult,
        backdrop_path,
        budget,
        genres,
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average
    } = movie;

    return (
        <div className={css.MovieListCard}>
            <PosterPreview poster_path={poster_path} original_title={original_title} height={'300px'}/>
            <div>Adult: {adult ? 'yes' : 'no'}</div>
            <div>Budget: {budget}</div>
            <div>Genres: {genres && genres.map(item => item.name).join(', ')}</div>
            <div>Original_title: {original_title}</div>
            <div>Overview: {overview}</div>
            <div>Release_date: {release_date}</div>
            <StarsRating vote_average={vote_average}/>
            <PosterPreview poster_path={backdrop_path} original_title={original_title} height={'150px'}/>
        </div>
    );
};

export {MovieListCardView};