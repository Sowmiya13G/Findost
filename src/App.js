import React, {useEffect} from 'react';
import OnboardingScreen from './screens/onBoardingScreen/onBoardingScreen';
import SplashScreen from 'react-native-splash-screen';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [1000]);
  return <OnboardingScreen />;
}
