import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from './HomeStack';
import {Ionicons} from '@expo/vector-icons';
import GuideStack from './GuideStack';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ 
      tabBarActiveTintColor: '#FF5722',
      tabBarInactiveTintColor: '#666',
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
      },
      tabBarIconStyle: { marginBottom: -3,
      },
      tabBarLabelStyle: { fontSize: 12 },
      headerShown: false,
     }}>
      <Tab.Screen name='Home' component={HomeStack} options={{
        tabBarIcon ({ color, size }) {
          return (
            <Ionicons name="home" size={size} color={color} />
          );
        }
      }} />

      <Tab.Screen name='Guides' component={GuideStack} options={{
        tabBarIcon ({ color, size }) {
          return (
            <Ionicons name="book" size={size} color={color} />
          );
        }
      }} />

      <Tab.Screen name='Profile' component={ProfileScreen} options={{
        tabBarIcon ({ color, size }) {
          return (
            <Ionicons name="person" size={size} color={color} />
          );
        }
      }} />


    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    // Add your styles here
  },
});