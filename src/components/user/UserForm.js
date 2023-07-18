import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "./userValidator";


const UserForm = ({setStatusNewUser}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({resolver: joiResolver(userValidator)});

    const save = (data) => {
        axios.post('http://jsonplaceholder.typicode.com/users', data)
            .then(data => {
                console.log(data.data)
                reset();
                setStatusNewUser(true);
            })
    }


    return (
        <form onSubmit={handleSubmit(save)}>
            <div><label>Name: <input type="text" placeholder={'name'} {...register('name')}/></label>
                {errors?.name?.message && <span style={{color: 'red'}}>{errors.name.message}</span>}
            </div>
            <div>Username: <label><input type="text" placeholder={'userName'} {...register('userName')}/></label>
                {errors?.userName?.message && <span style={{color: 'red'}}>{errors.userName.message}</span>}
            </div>
            <div><label>Email: <input type="text" placeholder={'email'} {...register('email')}/></label>
                {errors?.email?.message && <span style={{color: 'red'}}>{errors.email.message}</span>}
            </div>
            <button>Save</button>
        </form>
    );
};

export default UserForm;