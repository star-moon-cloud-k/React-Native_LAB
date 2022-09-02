import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Text style={styles.description}>야호! 할일이 없습니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#E1CF64',
  },
});

export default Empty;
