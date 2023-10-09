import React, {FC, useState} from "react";
import {IProduct} from "../models";
import axios from "axios";
import ErrorMsg from "./ErrorMsg";

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct: FC<CreateProductProps> = ({onCreate}) => {

    const productData: IProduct = {
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            count: 10,
            rate: 5
        }
    }

    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return;
        }

        productData.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data);
    };

    const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className='border py-2 px-4 mb-2 w-full outline-0'
                placeholder='Введите название продукта...'
                value={value}
                onChange={changeHandler}
            />

            {error && <ErrorMsg error={error}/>}
            <button
                type='submit'
                className='py-2 px-4 bg-yellow-400 border text-black text-black hover:text-red-500'
            >
                Create
            </button>
        </form>
    );
}

export default CreateProduct;   