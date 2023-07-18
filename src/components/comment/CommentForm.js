import React, {useEffect} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "./commentValidator";

const CommentForm = ({postId, setPostId}) => {

    const {register, handleSubmit, reset, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(commentValidator)
    });

    const save = (data) => {
        axios.post('http://jsonplaceholder.typicode.com/comments', data)
            .then(data =>{
                if (data.status === 200) {
                    throw Error('error')
                }
                setPostId('');
                reset();
                console.log('All ok')
                console.log(data.data)
            })
            .catch(e => console.error(e))
    }

    useEffect(() => {
        setValue('postId', postId)
    }, [postId, setValue])

    return (
        <form onSubmit={handleSubmit(save)}>
            <div><label>postId: <input type="text" readOnly placeholder={'postId'} {...register('postId')}/></label>
                {errors?.postId?.message && <span style={{color: 'red'}}>{errors.postId.message}</span>}
            </div>
            <div><label>name: <input type="text" placeholder={'name'} {...register('name')}/></label>
                {errors?.name?.message && <span style={{color: 'red'}}>{errors.name.message}</span>}
            </div>
            <div><label>email: <input type="text" placeholder={'email'} {...register('email')}/></label>
                {errors?.email?.message && <span style={{color: 'red'}}>{errors.email.message}</span>}
            </div>
            <div><label>body: <input type="text" placeholder={'body'} {...register('body')}/></label>
                {errors?.body?.message && <span style={{color: 'red'}}>{errors.body.message}</span>}
            </div>
            <button>Insert your five cents</button>
        </form>
    );
};

export default CommentForm;