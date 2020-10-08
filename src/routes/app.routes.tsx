import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Dashboard from '../pages/Dashboard'

import Profile from '../pages/Profile'
import CreateApointment from '../pages/CreateApointment'
import AppointmentCreated from '../pages/AppointmentCreated'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {
  return (
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { backgroundColor: '#312e38' } 
        }}>
            <Screen name="Dashboard" component={Dashboard} />
            <Screen name="CreateApointment" component={CreateApointment} />
            <Screen name="AppointmentCreated" component={AppointmentCreated} />
            
            <Screen name="Profile" component={Profile} />
      </Navigator>
  )
}

export default Routes