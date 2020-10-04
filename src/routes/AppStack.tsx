
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


import SignIn from '../pages/SignIn/'
import SignUp from '../pages/SignUp/'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { backgroundColor: '#312e38' } 
        }}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack