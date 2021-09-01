import React from 'react';
import { useSelector } from 'react-redux';
import {
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { RootState } from 'store/reducers';
import TodoItem from './TodoItem';
import { ITodo } from 'constants/todoTypes';

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todo);

  const renderItem = ({ item }: ListRenderItemInfo<ITodo>) => (
    <TodoItem todo={item} />
  );

  return (
    <FlatList
      style={styles.todoList}
      data={todos}
      renderItem={renderItem}
      keyExtractor={(todo) => todo.id}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todoList: {
    maxHeight: '70%',
  },
});
