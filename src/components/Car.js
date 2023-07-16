import React from 'react';

const Car = ({car, setCarForUpdate, setOnSave}) => {

    const {id, brand, price, year} = car;

    const deleteCar = () => {

        if (window.confirm(`Are you sure you want to destroy ${brand}?`)) {
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,
                {
                    headers: {'content-type': 'application/json'},
                    method: 'DELETE'
                })
                .then(value => {
                    if (!value.ok) {
                        throw Error('error')
                    } else {
                        window.alert(`You destroy beautiful car :(`)
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