import { ITodo } from 'constants/todoTypes';
import { TodoAction } from 'store/actions/todo';
import {
  ADD_FAILURE,
  ADD_SUCCESS,
  DELETE_FAILURE,
  DELETE_SUCCESS,
  EDIT_FAILURE,
  EDIT_SUCCESS,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  TOGGLE_FAILURE,
  TOGGLE_SUCCESS,
} from 'store/actions/types';

export type Status = 'idle' | 'loading' | 'success' | 'failure';

type TodoState = {
  todos: ITodo[];
  status: Status;
  error?: string;
  nextId: ITodo['id'];
};

const initialState: TodoState = {
  todos: [],
  status: 'idle',
  nextId: '0',
};

const getMaxTodoId = (todos: ITodo[]) => {
  const { id } = todos.reduce((prev, current) =>
    Number(prev.id) > Number(current.id) ? prev : current,
  );
  return id;
};

const increaseTodoId = (stringNumber: string) => {
  return String(Number(stringNumber) + 1);
};

const todo = (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        todos: action.payload.todos,
        status: 'success',
        nextId: increaseTodoId(getMaxTodoId(action.payload.todos)),
      };
    case ADD_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
        status: 'success',
        nextId: increaseTodoId(state.nextId),
      };
    case TOGGLE_SUCCESS:
    case EDIT_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.todo.id) {
            return action.payload.todo;
          }
          return todo;
        }),
        status: 'success',
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        status: 'success',
      };
    case FETCH_FAILURE:
    case ADD_FAILURE:
    case TOGGLE_FAILURE:
    case EDIT_FAILURE:
    case DELETE_FAILURE:
      return { ...state, status: 'failure', error: action.payload.error };
    default:
      return state;
  }
};

export default todo;
