import {Cars} from "./Cars/Cars";
import {CarForm} from "./Cars/CarForm/CarForm";

const CarContainer = () => {
    return (
        <div>
            <CarForm/>
            <br/>
            <Cars/>
        </div>
    );
};

export {
    CarContainer
};