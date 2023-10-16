import React, {FC} from 'react';
import Loader from "./Loader";
import {useTodos} from "../hooks/useTodos";

const TodoQueryApp: FC = () => {
    const {isLoading, data} = useTodos();


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