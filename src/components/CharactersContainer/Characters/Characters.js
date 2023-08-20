import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {charactersActions} from "../../../redux";
import {Character} from "../Character/Character";
import css from './Characters.module.css'

const Characters = () => {
    const {state: {ids}} = useLocation();
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(charactersActions.getByIds({ids}))
    }, []);

    console.log(characters)

    return (
        <div>
            <button onClick={() => navigate('/episodes')}>Return episodes</button>
            <br/>
            <br/>
            <div className={css.Characters}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {
    Characters
};