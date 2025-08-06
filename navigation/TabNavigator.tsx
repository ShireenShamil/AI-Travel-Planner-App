import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from './HomeStack.js';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='home' component={HomeStack} options={{
        tabBarIcon ({ color, size }) {
          return (
            <Ionicons name="home" size={size} color={color} />
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