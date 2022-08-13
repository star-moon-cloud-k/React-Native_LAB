import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function DateHead({ date }) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // const formatted = `${year}년 ${month}월 ${day}일`;

  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor="#26a69a" />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {year}년 {month}월 {day}일
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#eceff1',
  },
  block: {
    padding: 16,
    backgroundColor: '#eceff1',
  },
  dateText: {
    fontSize: 24,
    color: 'black',
  },
});

export default DateHead;
