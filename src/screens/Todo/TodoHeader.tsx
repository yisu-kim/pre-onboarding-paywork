import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDay, getWeekday, getYearAndMonth } from 'utils/date';

const TodoHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.day}>{getDay(today).slice(0, -1)}</Text>
      <View style={styles.date}>
        <Text>{getWeekday(today)}</Text>
        <Text>{getYearAndMonth(today)}</Text>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  day: {
    width: 50,
    height: 50,
    fontSize: 25,
    lineHeight: 50,
    textAlign: 'center',
    color: 'black',
  },
  date: {
    flex: 1,
    justifyContent: 'center',
  },
});

const today = new Date().toISOString();
