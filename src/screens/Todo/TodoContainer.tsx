import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TodoHeader from './TodoHeader';
import TodoInputForm from './TodoInputForm';
import TodoList from './TodoList';

const TodoContainer: React.FC = () => {
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
