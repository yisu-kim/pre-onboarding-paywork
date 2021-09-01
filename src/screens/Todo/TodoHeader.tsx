import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text>This is Header</Text>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'gray',
  },
});
