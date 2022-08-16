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

import Greeting from './component/Greeting';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>React!!!</Text>
        <Greeting />
      </View>
    </SafeAreaView>
  );
};
export default App;
