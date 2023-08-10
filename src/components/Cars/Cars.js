import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../../reduxCore/actions/carsActions";
import {Car} from "./Car/Car";

const Cars = () => {
    const dispatch = useDispatch();
    const cars = useSelector((store) => store.cars.cars)
    const refresh = useSelector((store) => store.cars.refresh)

    useEffect(() => {
        dispatch(getCars());
    }, [refresh])
    return (
        <div>
            {cars?.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};