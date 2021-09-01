import { ITodo, partialTodo, TodoId } from 'constants/todoTypes';
import {
  ADD,
  ADD_FAILURE,
  ADD_SUCCESS,
  DELETE,
  DELETE_FAILURE,
  DELETE_SUCCESS,
  EDIT,
  EDIT_FAILURE,
  EDIT_SUCCESS,
  FETCH,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  TOGGLE,
  TOGGLE_FAILURE,
  TOGGLE_SUCCESS,
} from './types';

export const fetchTodos = () => {
  return {
    type: FETCH,
  };
};

export const fetchTodosSuccess = (todos: ITodo[]) => {
  return {
    type: FETCH_SUCCESS,
    payload: { todos },
  };
};

export const fetchTodosFailure = (error: string) => {
  return {
    type: FETCH_FAILURE,
    payload: { error },
  };
};

export const addTodo = (todo: ITodo) => {
  return {
    type: ADD,
    payload: { todo },
  };
};

export const addTodoSuccess = (todo: ITodo) => {
  return {
    type: ADD_SUCCESS,
    payload: { todo },
  };
};

export const addTodoFailure = (error: string) => {
  return {
    type: ADD_FAILURE,
    payload: { error },
  };
};

export const toggleTodo = (id: TodoId, isCheck: partialTodo) => {
  return {
    type: TOGGLE,
    payload: { id, isCheck },
  };
};

export const toggleTodoSuccess = (todo: ITodo) => {
  return {
    type: TOGGLE_SUCCESS,
    payload: { todo },
  };
};

export const toggleTodoFailure = (error: string) => {
  return {
    type: TOGGLE_FAILURE,
    payload: { error },
  };
};

export const editTodo = (id: TodoId, content: partialTodo) => {
  return {
    type: EDIT,
    payload: { id, content },
  };
};

export const editTodoSuccess = (todo: ITodo) => {
  return {
    type: EDIT_SUCCESS,
    payload: { todo },
  };
};

export const editTodoFailure = (error: string) => {
  return {
    type: EDIT_FAILURE,
    payload: { error },
  };
};

export const deleteTodo = (id: TodoId) => {
  return {
    type: DELETE,
    payload: { id },
  };
};

export const deleteTodoSuccess = (id: TodoId) => {
  return {
    type: DELETE_SUCCESS,
    payload: { id },
  };
};

export const deleteTodoFailure = (error: string) => {
  return {
    type: DELETE_FAILURE,
    payload: { error },
  };
};

export type TodoAction =
  | ReturnType<typeof fetchTodos>
  | ReturnType<typeof fetchTodosSuccess>
  | ReturnType<typeof fetchTodosFailure>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof addTodoSuccess>
  | ReturnType<typeof addTodoFailure>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof toggleTodoSuccess>
  | ReturnType<typeof toggleTodoFailure>
  | ReturnType<typeof editTodo>
  | ReturnType<typeof editTodoSuccess>
  | ReturnType<typeof editTodoFailure>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof deleteTodoSuccess>
  | ReturnType<typeof deleteTodoFailure>;
