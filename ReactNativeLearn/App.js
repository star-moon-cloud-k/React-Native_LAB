/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

import Box from './component/Box';

import Greeting from './component/Greeting';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };
  const name = 'JSX';
  return (
    <SafeAreaView>
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
export default App;
