import React from 'react';
import { Text } from 'react-native';

interface ITodoItemProps {
  todo: number;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  return <Text>{todo}</Text>;
};

export default TodoItem;
