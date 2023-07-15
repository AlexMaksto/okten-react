import React, {useEffect, useState} from 'react';
import Car from "./Car";

const Cars = ({onSave, setCarForUpdate, setOnSave}) => {

    const [cars, setCars] = useState([]);


    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then((res) => res.json())
            .then(car => setCars(car))
            .catch(e => console.error(e))
    }, [onSave]);

    return (
        <>
            {cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setOnSave={setOnSave}/>).reverse()}
        </>
    );
};

export default Cars;