import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {background} from '../constants/images/images';
export const Background = () => {
  return (
    <View style={styles.container}>
      <Image
        source={background}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: '60%',
  },
});
