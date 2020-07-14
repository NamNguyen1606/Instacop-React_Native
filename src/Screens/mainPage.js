import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from './listProduct';
import DetailProduct from './detailProduct';
import SettingPage from './setting';
import Category from './categogy';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();
export default class MainPage extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          labelStyle: {fontSize: 14, fontWeight: 'bold', marginBottom: 5},
        }}>
        <Tab.Screen
          name="Home"
          component={ListScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Category"
          component={Category}
          options={{
            title: 'Category',
            tabBarIcon: ({color, size}) => (
              <Icon
                name="list-ul"
                type="font-awesome"
                color={color}
                size={15}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingPage}
          options={{
            title: 'Setting',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cog" color={color} size={17} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
