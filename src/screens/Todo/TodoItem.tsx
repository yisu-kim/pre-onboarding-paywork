import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
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

const isWeb = Platform.OS === 'web';

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
            {isWeb ? (
              todo.isCheck ? (
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
                    d="M14.72 8.79l-4.29 4.3l-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 .71.29a1 1 0 0 0 .7-.29l5-5a1 1 0 0 0 0-1.42a1 1 0 0 0-1.41 0zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z"
                    fill={GRAY_COLOR}
                  />
                </svg>
              ) : (
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
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z"
                    fill={THEME_COLOR}
                  />
                </svg>
              )
            ) : (
              <SvgXml
                xml={todo.isCheck ? CHECK_CIRCLE_ICON_XML : CIRCLE_ICON_XML}
                width="24"
                height="24"
                color={todo.isCheck ? GRAY_COLOR : THEME_COLOR}
              />
            )}
          </CustomButton>
          <Text
            style={[styles.content, todo.isCheck && styles.checkedContent]}
            onPress={toggleShowEditForm}
          >
            {todo.content}
          </Text>
          <CustomButton
            customStyle={styles.button}
            handlePress={handlePressDeleteButton}
          >
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
                  d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10z"
                  fill={THEME_COLOR}
                />
              </svg>
            ) : (
              <SvgXml
                xml={TRASH_ICON_XML}
                width="24"
                height="24"
                color={THEME_COLOR}
              />
            )}
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
