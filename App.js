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
    
      <Tab.Navigator
      
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      //labeled='false'
      barStyle={{ backgroundColor: '#5373CB'}}

      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 25;
            if (route.name === 'Home') {
              size = 22;
              iconName = focused ? 'newspaper-o' : 'newspaper-o';

            } else if (route.name === 'Rankings') {
              size = 26;
              iconName = focused ? 'globe' : 'globe';
  
            }
            else if (route.name == 'Profile'){
              iconName = focused ? 'user' : 'user';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title:null }}/>
        <Tab.Screen name="Rankings" component={RankingsScreen} options={{ title: null }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: null }}/>
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
