import React from 'react';
import {View, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodos';
import Empty from './components/Empty';

function App() {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={today} />
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
