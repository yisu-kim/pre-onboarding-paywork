import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import { RootState } from 'store/reducers';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <ScrollView style={styles.scrollView}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: '70%',
  },
});
