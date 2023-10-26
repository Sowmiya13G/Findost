import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
export const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#E8E8E8"
      />
    </View>
  );
};
