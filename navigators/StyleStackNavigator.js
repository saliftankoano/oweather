import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StyleScreen from '../screens/StyleScreen';

const Stack = createStackNavigator();

function StyleStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Style" component={StyleScreen} />
      {/* Add more screens here if needed */}
    </Stack.Navigator>
  );
}

export default StyleStackNavigator;
