import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Background} from '../../components/Background/Background';
import {findost} from '../../constants/images/images';
export default function LoginScreen() {
  return (
    <View>
      <Background />
      <Text>LoginScreen</Text>
    </View>
  );
}
