import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoInputForm: React.FC = () => {
  return (
    <View style={styles.inputForm}>
      <Text>This is Input Form</Text>
    </View>
  );
};

export default TodoInputForm;

const styles = StyleSheet.create({
  inputForm: {
    backgroundColor: 'skyblue',
  },
});
