import React, {FC, SyntheticEvent, useState} from 'react';
import Loader from "../components/Loader";
import {useTodos} from "../hooks/useTodos";
import {useIsFetching, useMutation, useQueryClient} from "@tanstack/react-query";
import '../index.css'
import todoService from "../services/todo.service";

const TodoQueryPage: FC = () => {
    const {isLoading, data, refetch} = useTodos();

    //Сколько раз произошло обновление данных
    const countFetching = useIsFetching();

    const [title, setTitle] = useState('');

    const {mutate} = useMutation(['create todo'], (title: string) => todoService.create(title), {
        async onSuccess() {
            setTitle('');
            alert('Todo created');
            //Обновляем данные после успешного добавления в базу
            await refetch()
        }
    })

    //Имеется кучу свойтв, которые можно вызвать откуда угодно и обновить данные
    const queryClient = useQueryClient();

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        // console.log(title);
        mutate(title)
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: '1fr 1fr',
            gap: 20
        }}>
            <div className={'text-white mt-2'}>
                {!!countFetching &&  <h3 className={'ml-4'}>Count fetching: {countFetching}</h3>}
                <h2 className={'ml-4 mt-2'}>Create Todo:</h2>
                <form
                    className={'mt-2'}
                    onSubmit={submitHandler}
                >
                    <div>
                        <input type="text"
                               onChange={e => setTitle(e.target.value)}
                               value={title}
                               placeholder={'Enter todo title...'}
                        />
                        <button>Create</button>
                    </div>
                </form>
            </div>
            <div className={'todo'}>
                <h1>TODOS:</h1>
                {/*Для Обновления данных*/}
                {/*<button className={'text-white'} onClick={() => queryClient.invalidateQueries(['todos'])}>*/}
                {/*    Refresh*/}
                {/*</button>*/}
                {isLoading ?
                    (<Loader/>
                    ) : data ? (data.map(todo => (
                            <div key={todo.id}>
                                <b>{todo.id}:</b>{todo.title}
                            </div>
                        ))
                    ) : (
                        <h1>Данных нет</h1>
                    )}
            </div>
        </div>
    );
};

export default TodoQueryPage;