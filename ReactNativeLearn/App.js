/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Box from './component/Box';
import Counter from './component/Counter';
import Greeting from './component/Greeting';

const App = () => {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  const onPress = () => {
    setVisible(!visible);
  };
  const name = 'JSX';

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
      <View>
        <Button title="토글" onPress={onPress} />
        <Text>React!!!</Text>
        <Greeting name={name} />
        {/* {visible ? <Box rounded={true} size="large" color="skyblue" /> : null} */}
        {visible && <Box rounded={true} size="large" color="skyblue" />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});
export default App;
