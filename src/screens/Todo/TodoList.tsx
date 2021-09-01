import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const [dummyItems, setDummyItems] = useState<number[]>([]);
  useEffect(() => {
    loadDummyItems();
  }, []);

  const loadDummyItems = () => {
    let arr = [];
    for (let i = 0; i < 50; i++) {
      arr.push(i);
    }
    setDummyItems(arr);
  };

  return (
    <ScrollView style={styles.scrollView}>
      {dummyItems.map((el, index) => (
        <TodoItem key={index} todo={el} />
      ))}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
  },
});
