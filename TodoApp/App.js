import React, {useState} from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import DateHead from "./component/DateHead";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AddTodo from "./component/AddTodo";
import Empty from "./component/Empty";
import TodoList from "./component/TodoList";

function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부하기', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.block}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          behavior={Platform.select({ios : 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? <Empty/> : <TodoList todos={todos} />}
          <AddTodo />
        </KeyboardAvoidingView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white'
  },
  avoid:{
    flex :1
  }
});
export default App;
