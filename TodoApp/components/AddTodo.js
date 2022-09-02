import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';

function AddTodo() {
  const [text, setText] = useState('');

  console.log(text);
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.buttonStyle}>
          <Image source={require('../assets/icons/add_white/add_white.png')} />
        </View>
      </TouchableOpacity>
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#E1CF64',
    borderRadius: 24,
  },
});

export default AddTodo;
