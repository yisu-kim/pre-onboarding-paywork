import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import { ITodo } from 'constants/todoTypes';
import { editTodo } from 'store/actions/todo';
import { THEME_COLOR } from 'styles/color';
import CustomButton from 'components/button';
import { SvgXml } from 'react-native-svg';
import {
  EDIT_CANCEL_ICON_XML,
  EDIT_DONE_ICON_XML,
} from 'constants/buttonIcons';

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

  const closeEditForm = () => {
    Keyboard.dismiss();
    toggleShowEditForm();
  };

  const handleSubmit = () => {
    closeEditForm();
    dispatch(editTodo(todo.id, content));
    setContent('');
  };

  return (
    <View style={styles.editForm}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
        defaultValue={content}
      />
      <CustomButton customStyle={styles.button} handlePress={handleSubmit}>
        <SvgXml
          xml={EDIT_DONE_ICON_XML}
          width="24"
          height="24"
          color={THEME_COLOR}
        />
      </CustomButton>
      <CustomButton customStyle={styles.button} handlePress={closeEditForm}>
        <SvgXml
          xml={EDIT_CANCEL_ICON_XML}
          width="22"
          height="22"
          color={THEME_COLOR}
        />
      </CustomButton>
    </View>
  );
};

export default TodoEditForm;

const styles = StyleSheet.create({
  editForm: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 5,
    borderBottomWidth: 1,
    borderColor: THEME_COLOR,
  },
  button: {
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: 'transparent',
  },
});
