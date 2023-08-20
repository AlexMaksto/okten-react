import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodesActions} from "../../../redux";
import css from './Episode.module.css';

const Episode = ({episode}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {name, air_date, episode: episodeName, characters} = episode;

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        dispatch(episodesActions.setCurrent(name))
        navigate('/characters', {state: {ids}})
    };

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>{name}</div>
            <div>{air_date}</div>
            <div>{episodeName}</div>
        </div>
    );
};

export {
    Episode
};