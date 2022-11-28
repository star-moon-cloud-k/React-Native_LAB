import React, {useEffect} from 'react';
import {View, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Button title="Drwaer열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}
export default HomeScreen;
