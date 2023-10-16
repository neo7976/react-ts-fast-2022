import React, {FC} from 'react';
import Loader from "./Loader";
import {useTodos} from "../hooks/useTodos";
import {useQueryClient} from "@tanstack/react-query";

const TodoQueryApp: FC = () => {
    const {isLoading, data} = useTodos();

    //Имеется кучу свойтв, которые можно вызвать откуда угодно и обновить данные
    const queryClient = useQueryClient();


    return (
        <div className={'content'}>
            //Для Обновления данных
            <button className={'text-white'} onClick={() => queryClient.invalidateQueries(['todos'])}>
                Refresh
            </button>
            {isLoading ?
                (<Loader/>
                ) : data ? (data.map(todo => (

                        <div key={todo.id}><p>{todo.id}:{todo.title}</p></div>
                    ))
                ) : (
                    <p>Данных нет</p>
                )}

        </div>
    );
};

export default TodoQueryApp;