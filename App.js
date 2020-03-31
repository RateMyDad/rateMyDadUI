import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Components/Screens/HomeScreen/HomeScreen';
import RankingsScreen from './src/Components/Screens/Rankings/RankingsScreen'
import ProfileScreen from './src/Components/Screens/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
//Here is the color scheme: https://coolors.co/545f66-829399-7bcace-effccc-b1cc74

import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#515D35"
        inactiveColor="#FFFAFA"
        barStyle={{backgroundColor: '#B1CC74'}}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
          {
            let iconName;
            size = 25;
            if (route.name === 'Home')
            {
              size = 25;
              iconName = focused ? 'newspaper-o' : 'newspaper-o';
            }
            else if (route.name === 'Rankings')
            {
              size = 25;
              iconName = focused ? 'globe' : 'globe';
            }
            else if (route.name == 'Profile')
            {
              iconName = focused ? 'user' : 'user';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        
        tabBarOptions = {{
          showLabel: false
        }}
        >

        <Tab.Screen name="Home" component={HomeScreen} options={{ title: null }}/>
        <Tab.Screen name="Rankings" component={RankingsScreen} options={{ title: null }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: null }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
