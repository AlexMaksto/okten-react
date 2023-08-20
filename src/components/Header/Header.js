import css from './Header.module.css'
import {useSelector} from "react-redux";

const Header = () => {
    const {current} = useSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            {current ? current : 'Rick & Morty'}
        </div>
    );
};

export {
    Header
};