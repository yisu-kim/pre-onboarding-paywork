import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { fetchTodos } from 'store/actions/todo';
import TodoHeader from './TodoHeader';
import TodoInputForm from './TodoInputForm';
import TodoList from './TodoList';

const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <View style={styles.todoContainer}>
      <TodoHeader />
      <TodoInputForm />
      <TodoList />
      <StatusBar style="auto" />
    </View>
  );
};

export default TodoContainer;

const styles = StyleSheet.create({
  todoContainer: {
    width: 300,
    marginVertical: 100,
  },
});
