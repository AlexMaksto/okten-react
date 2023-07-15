import React, {useState} from 'react';
import CarForm from "./CarForm";
import Cars from "./Cars";

const CarContainer = () => {

    const [onSave, setOnSave] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState({});

    return (
        <>
            <CarForm setOnSave={setOnSave} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars onSave={onSave} setCarForUpdate={setCarForUpdate} setOnSave={setOnSave}/>
        </>
    );
};

export default CarContainer;