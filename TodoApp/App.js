import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import DateHead from './component/DateHead';

function App() {
  const today = new Date();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#bd1111'}}>
        <DateHead date={today} />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({});
export default App;
