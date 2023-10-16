import axios from "axios";
import {ICreateTodo, ITodo} from "../modals/modalTodo";

class TodoService {
    private URL = `https://jsonplaceholder.typicode.com`;

    async getAll() {
        return axios.get<ITodo[]>(`${this.URL}/todos/?start=0&_limit=10`);
    }

    async getById(id: string) {
        return axios.get<ITodo>(`${this.URL}/todos/${id}`)
    }

    async create(title: string) {
        return axios.post<any, any, ICreateTodo>(`${this.URL}/todos`, {
            title: title,
            completed: false,
            userId: 1
        })
    }
}

export default new TodoService();