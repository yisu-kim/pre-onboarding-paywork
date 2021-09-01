import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { BASE_URL } from 'constants/todoApi';
import TodoService from 'services/todo';
import { ITodo } from 'constants/todoTypes';
import {
  addTodo,
  addTodoFailure,
  addTodoSuccess,
  deleteTodo,
  deleteTodoFailure,
  deleteTodoSuccess,
  editTodo,
  editTodoFailure,
  editTodoSuccess,
  fetchTodosFailure,
  fetchTodosSuccess,
  toggleTodo,
  toggleTodoFailure,
  toggleTodoSuccess,
} from 'store/actions/todo';
import { ADD, DELETE, EDIT, FETCH, TOGGLE } from 'store/actions/types';

const httpClient = axios.create({
  baseURL: BASE_URL,
});

const todoService = new TodoService(httpClient);

function* fetchTodosSaga() {
  try {
    const response: AxiosResponse<ITodo[]> = yield call(
      todoService.getTodoList,
    );
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

function* addTodoSaga(action: ReturnType<typeof addTodo>) {
  try {
    const response: AxiosResponse<ITodo> = yield call(
      todoService.postTodo,
      action.payload.todo,
    );
    yield put(addTodoSuccess(response.data));
  } catch (error) {
    yield put(addTodoFailure(error));
  }
}

function* toggleTodoSaga(action: ReturnType<typeof toggleTodo>) {
  try {
    const response: AxiosResponse<ITodo> = yield call(
      todoService.patchTodo,
      action.payload.id,
      action.payload.isCheck,
    );
    yield put(toggleTodoSuccess(response.data));
  } catch (error) {
    yield put(toggleTodoFailure(error));
  }
}

function* editTodoSaga(action: ReturnType<typeof editTodo>) {
  try {
    const response: AxiosResponse<ITodo> = yield call(
      todoService.patchTodo,
      action.payload.id,
      action.payload.content,
    );
    yield put(editTodoSuccess(response.data));
  } catch (error) {
    yield put(editTodoFailure(error));
  }
}

function* deleteTodoSaga(action: ReturnType<typeof deleteTodo>) {
  try {
    yield call(todoService.deleteTodo, action.payload.id);
    yield put(deleteTodoSuccess(action.payload.id));
  } catch (error) {
    yield put(deleteTodoFailure(error));
  }
}

export function* todoSaga() {
  yield takeEvery(FETCH, fetchTodosSaga);
  yield takeEvery(ADD, addTodoSaga);
  yield takeEvery(TOGGLE, toggleTodoSaga);
  yield takeEvery(EDIT, editTodoSaga);
  yield takeEvery(DELETE, deleteTodoSaga);
}
