import {useQuery} from "@tanstack/react-query";
import todoService from "../services/todo.service";

export const useTodos = () => {
    return useQuery(['todos'], () => todoService.getAll(),
        {
            //дестуктуризация, чтобы не писать data.data
            select: ({data}) => data,
            //Количество повторных запросов до появления ошибки
            retry: 1,
            //сколько про времени данные будут считаться свежими до повтороного запроса на сервер
            staleTime: 10000,
            //сколько про времени данные будут хранить в кэше
            cacheTime: 10000
            // enabled:true
            /*            onSuccess(data) {
                            alert(data[0].title);
                        },
                        onError(error) {
                            alert(error)
                        }*/
        }
    )

    /* когда получаем по ключу
    const todoId = 1;
        return useQuery(['todos', todoId], () => todoService.getById(todoId.toString()),
            {
                //дестуктуризация, чтобы не писать data.data
                select: ({data}) => data,
                enabled: !!todoId
            }
        )*/
}
