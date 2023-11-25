import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
          cardStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
          gestureDirection: 'vertical',
        }}>
        {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/> */}
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
