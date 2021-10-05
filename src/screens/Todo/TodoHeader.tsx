import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME_COLOR } from 'styles/color';
import { getDay, getWeekday, getYearAndMonth } from 'utils/date';

const TodoHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.day}>{getDayNumber(getDay(today))}</Text>
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
    marginBottom: 20,
  },
  day: {
    width: 50,
    height: 50,
    fontSize: 25,
    lineHeight: 46,
    textAlign: 'center',
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 50 / 2,
    borderColor: THEME_COLOR,
    color: THEME_COLOR,
  },
  date: {
    flex: 1,
    justifyContent: 'center',
    color: THEME_COLOR,
  },
});

const today = new Date();

const getDayNumber = (daystring: string) => {
  return daystring.replace(/[^\d+]/g, '');
};
