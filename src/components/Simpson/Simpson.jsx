import styles from "./Simpson.module.scss"

const Simpson = (props) => {
    const {name, surname, age, info, photo} = props;

    return (
        <div className={styles.container}>
            <h2>{name} - {surname}</h2>
            <p>Age: {age}</p>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    )

}

export default Simpson;