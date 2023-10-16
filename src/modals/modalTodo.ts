export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//забираем все кроме id
export interface ICreateTodo extends Omit<ITodo, 'id'> {

}