import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Orientacoes from './src/telas/Orientacoes';
import Leitura from './src/telas/Leitura';
import Contagem from './src/telas/Contagem';
import Resultado from './src/telas/Resultado';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Orientacoes"
        screenOptions={{
          headerStyle: { backgroundColor: '#4a148c' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Orientacoes" component={Orientacoes} options={{ title: 'Como Usar' }} />
        <Stack.Screen name="Leitura" component={Leitura} options={{ title: 'Analisador' }} />
        <Stack.Screen name="Contagem" component={Contagem} options={{ title: 'Letras' }} />
        <Stack.Screen name="Resultado" component={Resultado} options={{ title: 'Palíndromo?' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}