import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { ITodo } from 'constants/todoTypes';
import { addTodo } from 'store/actions/todo';
import { RootState } from 'store/reducers';

type TodoContent = ITodo['content'];

const TodoInputForm: React.FC = () => {
  const [content, setContent] = useState<TodoContent>('');
  const { nextId } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleChange = (text: TodoContent) => {
    setContent(text);
  };

  const handleSubmit = () => {
    dispatch(addTodo(nextId, content));
    setContent('');
  };

  return (
    <View style={styles.inputForm}>
      <TextInput
        style={styles.textInput}
        placeholder="할 일을 입력해주세요."
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        defaultValue={content}
      />
      <Button title="+" onPress={handleSubmit}></Button>
    </View>
  );
};

export default TodoInputForm;

const styles = StyleSheet.create({
  inputForm: {
    backgroundColor: 'skyblue',
  },
  textInput: {
    height: 40,
    paddingHorizontal: 10,
  },
});
