import {deleteCars, addUpdateCar} from "../../../reduxCore/actions/carsActions";
import {useDispatch} from "react-redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = () => {
        if (window.confirm(`Are you sure you want to destroy ${brand}?`)) {
            dispatch(deleteCars(id));
        } else {
            window.alert(`Very nice, you save ${brand}`)
        }
    }

    function update() {
        dispatch(addUpdateCar(car))
    }

    return (
        <>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={update}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </>
    );
};
export {
    Car
};