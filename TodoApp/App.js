import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateHead from './component/DateHead';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AddTodo from './component/AddTodo';

function App() {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <DateHead date={today} />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
export default App;
