import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackNavigator } from './StackNavigator';
import EmojiScreen from '../view/screens/EmojiScreen';
import { TabParams } from './Types';

const Tab = createMaterialTopTabNavigator<TabParams>();

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: '#121214', 
          borderTopWidth: 1, 
          borderTopColor: '#323238' 
        },
        tabBarActiveTintColor: '#00FF00',
        tabBarInactiveTintColor: '#A8A8B3',
        tabBarIndicatorStyle: { backgroundColor: '#00FF00', height: 3 },
        tabBarLabelStyle: { fontFamily: 'monospace', fontWeight: 'bold', fontSize: 12 },
      }}
    >
      <Tab.Screen 
        name="InventarioTab" 
        component={StackNavigator} 
        options={{ tabBarLabel: 'SISTEMA' }} 
      />
    
      <Tab.Screen 
        name="EmojiTab" 
        component={EmojiScreen} 
        options={{ tabBarLabel: 'ANOMALIA' }} 
      />
    </Tab.Navigator>
  );
}