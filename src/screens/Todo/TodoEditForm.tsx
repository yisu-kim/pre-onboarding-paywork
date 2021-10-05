import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  Platform,
} from 'react-native';
import { ITodo } from 'constants/todoTypes';
import { editTodo } from 'store/actions/todo';
import { THEME_COLOR } from 'styles/color';
import CustomButton from 'components/button';
import { SvgXml } from 'react-native-svg';
import {
  EDIT_CANCEL_ICON_XML,
  EDIT_DONE_ICON_XML,
} from 'constants/buttonIcons';

const isWeb = Platform.OS === 'web';
type TodoContent = ITodo['content'];
interface ITodoEditFormProps {
  todo: ITodo;
  toggleShowEditForm: () => void;
}

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
        autoFocus={true}
      />
      <CustomButton customStyle={styles.button} handlePress={handleSubmit}>
        {isWeb ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm5.01-4.1a2 2 0 0 1-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97c.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96l-7 6.93z"
              fill={THEME_COLOR}
            />
          </svg>
        ) : (
          <SvgXml
            xml={EDIT_DONE_ICON_XML}
            width="24"
            height="24"
            color={THEME_COLOR}
          />
        )}
      </CustomButton>
      <CustomButton customStyle={styles.button} handlePress={closeEditForm}>
        {isWeb ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7z"
              fill={THEME_COLOR}
            />
          </svg>
        ) : (
          <SvgXml
            xml={EDIT_CANCEL_ICON_XML}
            width="22"
            height="22"
            color={THEME_COLOR}
          />
        )}
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
