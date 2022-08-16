/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Box from './component/Box';

import Greeting from './component/Greeting';

const App = () => {
  const name = 'JSX'
  return (
    <SafeAreaView> 
      <View>
        <Text>React!!!</Text>
        <Greeting name={name} />
        <Box/>
      </View>
    </SafeAreaView>
  );
};
export default App;
