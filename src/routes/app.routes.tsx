import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Dashboard from '../pages/Dashboard'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {
  return (
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { backgroundColor: '#312e38' } 
        }}>
            <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
  )
}

export default Routes