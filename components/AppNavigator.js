// AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Import your screens
import CreateTeam from '../CreateTeam/CreateTeam';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateTeam" component={CreateTeam} />
        {/* Add other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
