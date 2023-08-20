import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const EpisodePagination = () => {
    const [, setQuery] = useSearchParams({page: '1'});
    const {next, prev} = useSelector(state => state.episodes);

    const toPrevPage = () => {
        setQuery(prev => ({page: +prev.get('page') - 1}))
    };

    const toNextPage = () => {
        setQuery(prev => ({page: +prev.get('page') + 1}))
    };

    return (
        <div>
            <button disabled={!prev} onClick={toPrevPage}>prev</button>
            <button disabled={!next} onClick={toNextPage}>next</button>
        </div>
    );
};

export {
    EpisodePagination
};