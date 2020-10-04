import 'react-native-gesture-handler';

import { AppLoading } from 'expo'
import React from 'react';
import { StatusBar } from 'react-native';
import { Ubuntu_400Regular, Ubuntu_500Medium, useFonts } from '@expo-google-fonts/ubuntu'

import AppStack from './src/routes/AppStack'

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular, 
    Ubuntu_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar barStyle="light-content" />
      </>
    );
  }
}
