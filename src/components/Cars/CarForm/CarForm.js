import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "./carValidator"
import {useDispatch, useSelector} from "react-redux";
import {addCar, addUpdateCar, updateCar} from "../../../reduxCore/actions/carsActions";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator)
    });
    const dispatch = useDispatch();
    const carForUpdate = useSelector((store) => store.cars.carForUpdate);

    const initialCar = {id: 0}

    const save = (data) => {
        clearForm();
        dispatch(addCar(data));
    };

    const update = (data) => {
        clearForm();
        dispatch(updateCar(data))
    };

    const clearForm = () => {
        dispatch(addUpdateCar(initialCar))
        reset();
    }

    useEffect(() => {
        setValue('id', carForUpdate.id)
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }, [carForUpdate]);

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(!carForUpdate.id ? save : update)}>
                    {carForUpdate.id &&
                        <div>
                            <label>id: <input type="text" readOnly
                                              placeholder={'id'} {...register('id', {valueAsNumber: true})}/></label>
                        </div>}
                    <div>
                        <label>brand: <input type="text" placeholder={'brand'} {...register('brand')}/></label>
                        {errors?.brand?.message && <span>{errors.brand.message}</span>}
                    </div>
                    <div>
                        <label>price: <input type="text"
                                             placeholder={'price'} {...register('price', {valueAsNumber: true})}/></label>
                        {errors?.price?.message && <span>{errors.price.message}</span>}
                    </div>
                    <div>
                        <label>year: <input type="text"
                                            placeholder={'year'} {...register('year', {valueAsNumber: true})}/></label>
                        {errors?.year?.message && <span>{errors.year.message}</span>}
                    </div>
                    <button>{carForUpdate.id ? `Update ${carForUpdate.id}` : 'Save'}</button>
                    <button onSubmit={() => clearForm()}>Clear form</button>
                </form>
            </div>
        </div>
    );
};

export {
    CarForm
};