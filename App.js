import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { ThemeProvider } from './theme';
import ConnectivityListener from './components/ConnectivityListener';
import LoginScreen from './login';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ContactsScreen from './screens/ContactsScreen';
import RegistrationScreen from './registration';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = ({ isNightMode }) => {
  return (
    <ThemeProvider>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Calculator') {
            iconName = focused ? 'calculate' : 'person-outline';
          }

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'contacts' : 'person-outline';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
          


        
        },
      })}
      tabBarOptions={{
        activeTintColor: '#024A9B',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: isNightMode ? '#292929' : '#BBBABA',
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />

    </Tab.Navigator>
    </ThemeProvider>

    


  );
};

const App = () => {
  const theme = DarkTheme;

  return (
      
          <ThemeProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={HomeTabNavigator} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />

       
      </Stack.Navigator>
      <ConnectivityListener />
    </NavigationContainer>
    </ThemeProvider>
    

  );
};

export default App;
