import React from 'react';
import axios from "axios";

const Car = ({car, setCarForUpdate, setOnSave}) => {

    const {id, brand, price, year} = car;

    const deleteCar = () => {
        if (window.confirm(`Are you sure you want to destroy ${brand}?`)) {
            axios.delete(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`)
                .then(data => {
                    if (data.status === 200) {
                        throw Error('error')
                    } else {
                        window.alert(`You destroy beautiful ${brand} :(`)
                        setOnSave(prev => !prev)
                    }
                })
                .catch(e => console.error(e))
        } else {
            window.alert(`Very nice, you save ${brand}`)
        }
    }

    return (
        <>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </>
    );
};

export default Car;