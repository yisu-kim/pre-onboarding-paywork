import { AxiosInstance, AxiosResponse } from 'axios';
import { TODO_URL } from 'constants/todoApi';
import { ITodo, TodoId, partialTodo } from 'constants/todoTypes';

class TodoService {
  constructor(private httpClient: AxiosInstance) {}

  postTodo(todo: ITodo): Promise<AxiosResponse<ITodo>> {
    return this.httpClient.post<ITodo>(TODO_URL, { ...todo });
  }

  getTodoList(): Promise<AxiosResponse<ITodo[]>> {
    return this.httpClient.get<ITodo[]>(TODO_URL);
  }

  patchTodo(id: TodoId, todo: partialTodo): Promise<AxiosResponse<ITodo>> {
    return this.httpClient.patch<ITodo>(`${TODO_URL}/${id}`, { ...todo });
  }

  deleteTodo(id: TodoId): Promise<AxiosResponse<{}>> {
    return this.httpClient.delete<{}>(`${TODO_URL}/${id}`);
  }
}

export default TodoService;
