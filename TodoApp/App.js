import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DateHead from "./component/DateHead";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AddTodo from "./component/AddTodo";
import Empty from "./component/Empty";
function App() {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.block}>
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
    backgroundColor: 'white'
  },
});
export default App;
