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
};

const initialState: TodoState = {
  todos: [],
  status: 'idle',
};

const todo = (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { todos: action.payload.todos, status: 'success' };
    case ADD_SUCCESS:
      return {
        todos: [...state.todos, action.payload.todo],
        status: 'success',
      };
    case TOGGLE_SUCCESS:
    case EDIT_SUCCESS:
      return {
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
