import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function AddTodo() {
  const [text, setText] = useState('');

  console.log(text);
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요"
        style={styles.input}
        value={text}
        onChange={setText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#E1CF64',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#D3ED5C',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
});

export default AddTodo;
