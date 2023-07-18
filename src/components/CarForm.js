import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "./carValidator"
import axios from "axios";

const CarForm = ({setOnSave, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator)
    });

    const save = (data) => {
        axios.post('http://owu.linkpc.net/carsAPI/v1/cars', data)
            .then(data => {
                if (data.status !== 201) {
                    throw Error('error')
                }
                clearForm()
            })
            .catch(e => console.error(e))
    };

    const update = (data) => {
        axios.put(`http://owu.linkpc.net/carsAPI/v1/cars/${data.id}`, data)
            .then(data => {
                if (data.status !== 200) {
                    throw Error('error')
                }
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
        setValue('id', carForUpdate.id)
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }, [carForUpdate.brand, carForUpdate.id, carForUpdate.price, carForUpdate.year, setValue]);

    return (
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
                    <label>year: <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/></label>
                    {errors?.year?.message && <span>{errors.year.message}</span>}
                </div>
                <button>{carForUpdate.id ? `Update ${carForUpdate.id}` : 'Save'}</button>
                {/*<button onSubmit={() => clearForm}>Clear form</button>*/}
            </form>
        </div>
    );
};

export default CarForm;