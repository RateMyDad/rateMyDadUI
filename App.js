import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Components/Screens/HomeScreen';
import RankingsScreen from './src/Components/Screens/RankingsScreen';
import ProfileScreen from './src/Components/Screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator labeled="false">
        <Tab.Screen 
          name="Home"
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="newspaper-o" size={22} />
            ),
          }}
        />
        <Tab.Screen 
          name="Rankings" 
          component={RankingsScreen}
          options={{
  
            tabBarIcon: ({ color, size }) => (
              <Icon name="globe" size={22} />
            ),
          }} />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={22} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
