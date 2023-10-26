import React, {useEffect} from 'react';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
export default function App() {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, [1000]);
  return <AppNavigator />;
}
