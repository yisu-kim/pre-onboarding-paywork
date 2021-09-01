import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { ITodo } from 'constants/todoTypes';
import { editTodo } from 'store/actions/todo';

interface ITodoEditFormProps {
  todo: ITodo;
  toggleShowEditForm: () => void;
}

type TodoContent = ITodo['content'];

const TodoEditForm: React.FC<ITodoEditFormProps> = ({
  todo,
  toggleShowEditForm,
}) => {
  const [content, setContent] = useState<TodoContent>(todo.content);
  const dispatch = useDispatch();

  const handleChangeText = (text: TodoContent) => {
    setContent(text);
  };

  const handleSubmit = () => {
    toggleShowEditForm();
    dispatch(editTodo(todo.id, content));
    setContent('');
  };

  return (
    <View style={styles.editForm}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChangeText}
        onEndEditing={console.log}
        onSubmitEditing={handleSubmit}
        defaultValue={content}
      />
      <Button title="ok" onPress={handleSubmit}></Button>
    </View>
  );
};

export default TodoEditForm;

const styles = StyleSheet.create({
  editForm: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});
