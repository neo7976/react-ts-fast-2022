import React, {FC} from 'react';
import {useQuery} from "@tanstack/react-query";
import Loader from "./Loader";
import todoService from "../services/todo.service";

const TodoQueryApp: FC = () => {
    // const {isLoading, error, data} = useQuery(['todos', todoID], () => (
    //     fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
    // ))

    const {isLoading, data} = useQuery(['todos'],
        () => todoService.getAll(),
        {
            //дестуктуризация, чтобы не писать data.data
            select: ({data}) => data
        }
    )


    return (
        <div>
            {isLoading ?
                (<Loader/>
                ) : data ? (data.map(todo => (
                        <div><p>{todo.id}:{todo.title}</p></div>
                    ))
                ) : (
                    <p>Данных нет</p>
                )}

        </div>
    );
};

export default TodoQueryApp;