import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailProduct from '../Screens/detailProduct';

const Tab = createBottomTabNavigator();

export default class HomeNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.View name="ListProduct" Component={DetailProduct} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
