import React, {useEffect, useState} from 'react';
import Car from "./Car";
import axios from "axios";

const Cars = ({onSave, setCarForUpdate, setOnSave}) => {

    const [cars, setCars] = useState([]);


    useEffect(() => {
        axios.get('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(car => setCars(car.data))
            .catch(e => console.error(e))
    }, [onSave]);

    return (
        <>
            {cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate}
                                  setOnSave={setOnSave}/>).reverse()}
        </>
    );
};

export default Cars;