import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Capa from './src/Telas/Capa';
import Historia from './src/Telas/Historia';
import Alianca from './src/Telas/Alianca';
import Horda from './src/Telas/Horda';
import Deuses from './src/Telas/Deuses';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Capa"
        screenOptions={{
          headerStyle: { backgroundColor: '#1a1a1a' },
          headerTintColor: '#f5c242',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Capa" component={Capa} options={{ headerShown: false }} />
        <Stack.Screen name="Historia" component={Historia} options={{ title: 'Azeroth' }} />
        <Stack.Screen name="Alianca" component={Alianca} options={{ title: 'A Aliança' }} />
        <Stack.Screen name="Horda" component={Horda} options={{ title: 'A Horda' }} />
        <Stack.Screen name="Deuses" component={Deuses} options={{ title: 'Os Deuses' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}