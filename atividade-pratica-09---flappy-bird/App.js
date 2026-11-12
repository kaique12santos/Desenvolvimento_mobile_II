import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela1 from './src/Telas/tela1';
import Tela2 from './src/Telas/tela2';
import Tela3 from './src/Telas/tela3';
import Tela4 from './src/Telas/tela4';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Tela1"
        screenOptions={{
          headerStyle: { backgroundColor: '#0288d1' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Tela1" component={Tela1} options={{ headerShown: false }} />
        <Stack.Screen name="Tela2" component={Tela2} options={{ title: 'Instruções' }} />
        <Stack.Screen name="Tela3" component={Tela3} options={{ title: 'Flappy Bird', headerShown: false }} />
        <Stack.Screen name="Tela4" component={Tela4} options={{ title: 'Créditos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}