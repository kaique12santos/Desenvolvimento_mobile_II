import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Tela1 from './src/Telas/tela1';
import Tela2 from './src/Telas/tela2';
import Tela3 from './src/Telas/tela3';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Pizza') {
              iconName = focused ? 'pizza' : 'pizza-outline';
            } else if (route.name === 'Hamburger') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            } else if (route.name === 'Bebida') {
              iconName = focused ? 'pint' : 'pint-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#e53935',
          tabBarInactiveTintColor: 'gray',
          headerStyle: { backgroundColor: '#e53935' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        })}
      >
        <Tab.Screen name="Pizza" component={Tela1} />
        <Tab.Screen name="Hamburger" component={Tela2} />
        <Tab.Screen name="Bebida" component={Tela3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}