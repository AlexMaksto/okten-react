import styles from "./RickAndMorti.module.scss"

const RickAndMorti = (props) => {
    const {id, name, status, species, gender, image} = props

    return (
        <div className={styles.container}>
            <h2>ID: {id}</h2>
            <h2>{name}</h2>
            <h3>{status} - {species}</h3>
            <h4>{gender}</h4>
            <img src={image} alt={name}/>
        </div>
    )
}

export default RickAndMorti;