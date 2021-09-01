import React from 'react';
import { Provider } from 'react-redux';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import store from 'store';
import { Todo } from 'screens/Todo';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Todo />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
