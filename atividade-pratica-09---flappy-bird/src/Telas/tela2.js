import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Estilo from '../estilo';

export default function Tela2({ navigation }) {
  return (
    <View style={Estilo.container}>
      <View style={Estilo.card}>
        <Text style={Estilo.titulo}>Como Jogar</Text>
        <Text style={Estilo.texto}>
          1. Toque em qualquer lugar da tela para fazer o pássaro bater as asas e subir.
        </Text>
        <Text style={Estilo.texto}>
          2. Se você parar de tocar, a gravidade puxará o pássaro para baixo.
        </Text>
        <Text style={Estilo.texto}>
          3. Atravesse o espaço entre os canos verdes para ganhar pontos.
        </Text>
        <Text style={Estilo.texto}>
          4. Se encostar nos canos, no topo ou no chão, é Fim de Jogo!
        </Text>
      </View>

      <TouchableOpacity 
        style={[Estilo.botao, Estilo.botaoSecundario]} 
        onPress={() => navigation.navigate('Tela3')}
      >
        <Text style={Estilo.textoBotao}>Ir para o Jogo</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={Estilo.botao} 
        onPress={() => navigation.goBack()}
      >
        <Text style={Estilo.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}