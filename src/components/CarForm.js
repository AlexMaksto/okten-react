import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "./carValidator"

const CarForm = ({setOnSave, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const save = (data) => {
        if (data.id) {
            data.id = '/' + data.id
        }

        fetch('http://owu.linkpc.net/carsAPI/v1/cars' + data.id, {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data),
            method: data.id ? 'PUT' : 'POST'
        })
            .then(value => {
                if (!value.ok) {
                    throw Error('error')
                }
                return value.json()
            })
            .then(() => {
                clearForm()
            })
            .catch(e => console.error(e))
    };

    const clearForm = () => {
        setCarForUpdate(prev => !prev);
        setOnSave(prev => !prev);
        reset();
    }

    useEffect(() => {
        setValue('id', carForUpdate.id, {shouldValidate: true})
        setValue('brand', carForUpdate.brand, {shouldValidate: true})
        setValue('price', carForUpdate.price, {shouldValidate: true})
        setValue('year', carForUpdate.year, {shouldValidate: true})
    }, [carForUpdate.brand, carForUpdate.id, carForUpdate.price, carForUpdate.year, setValue]);

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                {carForUpdate.id &&
                    <div>
                        <label>id: <input type="text" readOnly
                                          placeholder={'id'} {...register('id', {valueAsNumber: true})}/></label>
                    </div>}
                <div>
                    <label>brand: <input type="text" placeholder={'brand'} {...register('brand')}/></label>
                    {errors.brand && <span>{errors.brand.message}</span>}
                </div>
                <div>
                    <label>price: <input type="text"
                                         placeholder={'price'} {...register('price', {valueAsNumber: true})}/></label>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div>
                    <label>year: <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/></label>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button disabled={!isValid}>{carForUpdate.id ? `Update ${carForUpdate.id}` : 'Save'}</button>
                <button onSubmit={() => clearForm}>Clear form</button>
            </form>
        </div>
    );
};

export default CarForm;