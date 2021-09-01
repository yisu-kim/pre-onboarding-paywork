import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ITodo } from 'constants/todoTypes';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from 'store/actions/todo';
import { useState } from 'react';
import TodoEditForm from './TodoEditForm';

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handlePressCheckButton = () => {
    dispatch(toggleTodo(todo.id, !todo.isCheck));
  };

  const toggleShowEditForm = () => {
    setShowEditForm((prev) => !prev);
  };

  const handlePressDeleteButton = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <View style={styles.todoItem}>
      <Button
        title={todo.isCheck === true ? 'O' : 'V'}
        onPress={handlePressCheckButton}
      ></Button>
      {showEditForm ? (
        <TodoEditForm todo={todo} toggleShowEditForm={toggleShowEditForm} />
      ) : (
        <Text style={styles.content} onPress={toggleShowEditForm}>
          {todo.content}
        </Text>
      )}
      <Button title="X" onPress={handlePressDeleteButton}></Button>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
});
