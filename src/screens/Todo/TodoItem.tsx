import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { ITodo } from 'constants/todoTypes';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from 'store/actions/todo';
import TodoEditForm from './TodoEditForm';
import CustomButton from 'components/button';
import {
  CHECK_CIRCLE_ICON_XML,
  CIRCLE_ICON_XML,
  TRASH_ICON_XML,
} from 'constants/buttonIcons';
import { GRAY_COLOR, THEME_COLOR } from 'styles/color';

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
    <>
      {showEditForm ? (
        <TodoEditForm todo={todo} toggleShowEditForm={toggleShowEditForm} />
      ) : (
        <View style={styles.todoItem}>
          <CustomButton
            customStyle={styles.button}
            handlePress={handlePressCheckButton}
          >
            <SvgXml
              xml={
                todo.isCheck === true ? CHECK_CIRCLE_ICON_XML : CIRCLE_ICON_XML
              }
              width="24"
              height="24"
              color={todo.isCheck === true ? GRAY_COLOR : THEME_COLOR}
            />
          </CustomButton>
          <Text
            style={[
              styles.content,
              todo.isCheck === true && styles.checkedContent,
            ]}
            onPress={toggleShowEditForm}
          >
            {todo.content}
          </Text>
          <CustomButton
            customStyle={styles.button}
            handlePress={handlePressDeleteButton}
          >
            <SvgXml
              xml={TRASH_ICON_XML}
              width="24"
              height="24"
              color={THEME_COLOR}
            />
          </CustomButton>
        </View>
      )}
    </>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  content: {
    flex: 1,
    marginHorizontal: 5,
    textAlignVertical: 'center',
    color: THEME_COLOR,
  },
  checkedContent: {
    color: GRAY_COLOR,
    textDecorationLine: 'line-through',
  },
  button: {
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: 'transparent',
  },
});
