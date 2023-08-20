import css from './Character.module.css'

const Character = ({character}) => {
    const {name, status, species, image} = character;

    return (
        <div className={css.Episode}>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {
    Character
};