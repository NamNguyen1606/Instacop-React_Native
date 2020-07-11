/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Login from './src/Screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ListScreen from './src/Screens/listProduct';
import DetailProduct from './src/Screens/detailProduct';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          headerMode="float"
          options={{
            title: 'New In',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
