import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { ITodo } from 'constants/todoTypes';
import { addTodo } from 'store/actions/todo';
import { RootState } from 'store/reducers';
import { PLUS_ICON_XML } from 'constants/buttonIcons';
import { THEME_COLOR } from 'styles/color';
import CustomButton from 'components/button';

type TodoContent = ITodo['content'];

const TodoInputForm: React.FC = () => {
  const [content, setContent] = useState<TodoContent>('');
  const { nextId } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleChange = (text: TodoContent) => {
    setContent(text);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
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
      <CustomButton customStyle={styles.button} handlePress={handleSubmit}>
        <SvgXml xml={PLUS_ICON_XML} width="100%" height="22" color="white" />
      </CustomButton>
    </View>
  );
};

export default TodoInputForm;

const styles = StyleSheet.create({
  inputForm: {
    paddingHorizontal: 5,
  },
  textInput: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: THEME_COLOR,
  },
  button: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: THEME_COLOR,
  },
});
