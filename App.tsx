import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'

import { AppLoading } from 'expo'
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Ubuntu_400Regular, Ubuntu_500Medium, useFonts } from '@expo-google-fonts/ubuntu'

import AppProvider from './src/hooks'

import Routes from './src/routes'

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular, 
    Ubuntu_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AppProvider>
          <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <Routes />
          </View>
        </AppProvider>
      </NavigationContainer>

    );
  }
}

export default App