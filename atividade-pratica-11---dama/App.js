import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela1 from './src/telas/tela1';
import Tela2 from './src/telas/tela2';
import Tela3 from './src/telas/tela3';
import Tela4 from './src/telas/tela4';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Tela1"
        screenOptions={{
          headerStyle: { backgroundColor: '#151515' }, 
          headerTintColor: '#f5c242', // Dourado WoW
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name="Tela1" component={Tela1} options={{ title: 'Damas de Azeroth' }} />
        <Stack.Screen name="Tela2" component={Tela2} options={{ title: 'Instruções' }} />
        <Stack.Screen name="Tela3" component={Tela3} options={{ title: 'Batalha', headerShown: false }} />
        <Stack.Screen name="Tela4" component={Tela4} options={{ title: 'Créditos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}