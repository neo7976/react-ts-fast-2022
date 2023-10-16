import React, {FC} from 'react';
import {useQuery} from "@tanstack/react-query";

const QueryApp: FC = () => {
    const todoID = 1;
    const {isLoading, error, data} = useQuery(['todos', todoID], () => (
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
    ))


    return (
        <div className={'content'}>
            {data ?
                <p>Todo : {data?.title}</p>
                :
                <p>Данных нет</p>}
        </div>
    );
};

export default QueryApp;